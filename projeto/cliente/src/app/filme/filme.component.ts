import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CriticaComponent } from '../critica/critica.component';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Critica } from '../tipos/critica';
import { DialogData } from '../tipos/dialog-data';
import { RespostaServidorFilmes }  from '../tipos/interfaces-servidor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})

export class FilmeComponent implements OnInit {

  filme: Filme = {
    id: "2",
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    diretores: [{nome: "Russo1"}, {nome: "Russo2"}],
    elenco: [{nome: "Robert Downey Jr"}, {nome: "Scarlett Johansson"}],
    criticas: [{username: "guilherme", data: "12/12/2012", comentario: "adorei, achei uma porcaria", nota: 9},
                  {username: "marcelo", data: "12/12/2012", comentario: "adorei, mas nem tanto", nota: 8}],
    imagens: ["/assets/images/vingadores_0.jpg"],
    sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
  };

// TODO: Remover filme inicial


  criticaDialogRef: MatDialogRef<CriticaComponent>;

  criticaDoUsuario: Critica;

  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location,
              public dialog: MatDialog,
              private usuarioService: UsuarioService) {

    this.observerUsuario();
  }

  ngOnInit() {

    // Busca filme id
    this.getFilme();// TODO: Sem servidor

  }
  /**
   *Adiciona um observer ao estado do usuário de logado.
   */
  observerUsuario() {

    this.usuarioService.usuario$.subscribe({

      next: (novoUsuario) => {
        // TODO: Apagar esse log
        console.log(`Observer do filme.component: ${JSON.stringify(novoUsuario)}`);

        this.getFilme();
      }

    });
  }

  getFilme() {
    console.log('GET FILME' + this.route.snapshot.params.id);
    var router = 'id/' + this.route.snapshot.params.id;

    this.filmeService.getFilme(router).subscribe(resposta => {
      this.carregaDadosDoFilme(resposta);
    });
  }

  // Essa função carrega os dados do filme na página
  carregaDadosDoFilme(resposta: RespostaServidorFilmes) {
    console.log('resposta do server:' + JSON.stringify(resposta));

    if (!resposta.houveErro) {

      if (resposta.filmes.length > 0) {
        this.filme = resposta.filmes[0];
        console.log('achou um filme');

        // Separa o comentario do usuario se ele existir
        this.ajustaCriticas();
      } else {
        // TODO: Dispara ação quando não acha filme.
        console.log("nenhumFilmeFoiEncontrado");
      }
    } else {
      // Houve erro
      console.log("ERRO!");
      console.log(resposta.mensagemErro)
    }
  }


  /* Se o usuário estiver logado vai precisar ver se ele já faz uma crítica
   *  E se esse for o caso precisa-se mostrar essa cŕitica de forma diferente
   */
  ajustaCriticas() {
    console.log('estou em ajustaCriticas()');

    var user = this.usuarioService.getUser();

    if (user != null) {
        console.log('Usuário Logado =>' + user.login.username);
          console.log('criticaDoUsuario antes:' + JSON.stringify(this.criticaDoUsuario));
          this.criticaDoUsuario = this.getCriticaDoUsuario(user.login.username);
          console.log('criticaDoUsuario depois:' + JSON.stringify(this.criticaDoUsuario));
    } else {
      console.log('Usuário não esta logado.');
      this.criticaDoUsuario = null;
    }
  }
  /*
  * Extrai a crítica do usuário logado do vetor de críticas para exibir ela separadamente.
  * Após isso, o vetor críticas está pronto para ser exibido.
  */
  getCriticaDoUsuario(username: String): Critica {
    var index = -1;
    var criticaDoUsuario: Critica = null;

    for (let critica of this.filme.criticas) {
      if (critica.username == username) {
        // Encontra a posição da crítica e a remove do vetor
        index = this.filme.criticas.indexOf(critica);
        criticaDoUsuario = this.filme.criticas.splice(index, 1)[0];
      }
    }
    return criticaDoUsuario;
  }

  /*
   *  As próximas funções são sobre a caixa de dialogo de crítica
   */
  criticar(): void {

    var usuario = this.usuarioService.getUser();

    // Se this.criticaDoUsuario for null quer dizer não fez crítica antes.
    var dados: DialogData = {
      filme: this.filme,
      usuario: usuario,
      critica: this.criticaDoUsuario
    };

    const dialogRef = this.dialog.open(CriticaComponent, {
      width: '500px',
      data: dados
    });

    dialogRef.afterClosed().subscribe(resposta => {
      console.log('Fechou caixa de dialogo');
      console.log('resposta vinda da caixa de dialogo:' + JSON.stringify(resposta));

      // atualiza os dados da página
      // TODO: Uma possível otimização seria só atualizar as críticas
      if (resposta != null) {
        this.carregaDadosDoFilme(resposta);
      }

    });
  }


}

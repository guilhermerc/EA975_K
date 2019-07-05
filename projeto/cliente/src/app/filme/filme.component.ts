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

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})

export class FilmeComponent implements OnInit {

  filme: Filme = {
    id: 1,
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    direcao: null,
    elenco: null,
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
    var idFilme = this.route.snapshot.params.id;

    // TODO: Sem servidor
    // Busca filme id
    this.getFilme('id/' + idFilme);

  }
  /**
    Adiciona um observer ao estado do usuário de logado.
  */
  observerUsuario() {

    this.usuarioService.usuarioEstaLogado.subscribe(usuarioEstaLogado => {

      console.log("this.usuarioService.usuarioEstaLogado.subscribe()");

      this.ajustaCriticaDoUsuario();
    });

  }

  getFilme(router: string) {

    this.filmeService.getFilme(router).subscribe(resposta => {

      console.log('resposta do server:' + JSON.stringify(resposta));

      if (!resposta.houveErro) {

        if (resposta.filmes.length > 0) {
          this.filme = resposta.filmes[0];

          // Separa o comentario do usuario se ele existir
          this.ajustaCriticaDoUsuario();
        } else {
          // TODO: Dispara ação quando não acha filme.
          console.log("nenhumFilmeFoiEncontrado");
        }
      } else {
        // Houve erro
        console.log(resposta.mensagemErro)
      }


      console.log('Filmes retornados' + resposta.filmes+']');

    });
  }

  // Se o usuário estiver logado vai precisar ver se ele já faz uma crítica
  // E se esse for o caso precisa-se mostrar essa cŕitica de forma diferente
  ajustaCriticaDoUsuario() {
    console.log('estou em ajustaCriticaDoUsuario()');

    var user = this.usuarioService.getUser();
    console.log('estou em ajustaCriticaDoUsuario()+ user:' + user);

    if (user != null) {
          console.log('criticaDoUsuario antes:' + JSON.stringify(this.criticaDoUsuario));
          this.criticaDoUsuario = this.getCriticaDoUsuario(user.login.username);
          console.log('criticaDoUsuario depois:' + JSON.stringify(this.criticaDoUsuario));

          console.log('criticado usuario'+this.criticaDoUsuario);
    } else {
      console.log('else do ajustaCriticaDoUsuario()');
      this.criticaDoUsuario = null;
    }
  }

  criticar(): void {

    var usuario = this.usuarioService.getUser();
    var dados: DialogData = {
      filme: this.filme,
      usuario: usuario,
      critica: this.criticaDoUsuario
    };

    const dialogRef = this.dialog.open(CriticaComponent, {
      width: '500px',
      data: dados
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechou caixa de dialogo');
      // atualiza filmes

    });
  }

  getCriticaDoUsuario(username: String): Critica {
    var index = -1;
    var critica: any;
    for (let critica of this.filme.criticas) {
      if (critica.username == username) {
        index = this.filme.criticas.indexOf(critica);
      }
    }
    if (index != -1) {
      console.log('criticas antes:' + JSON.stringify(this.filme));
      critica = this.filme.criticas.splice(index, 1)[0];
      console.log('criticas depois:' + JSON.stringify(this.filme));
      console.log('retirado:' + JSON.stringify(critica));
      return critica;
    } else {

      return null;
    }
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Filme, Critica } from '../filme';
import { FilmeService } from '../filme.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CriticaComponent } from '../critica/critica.component';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { DialogData } from '../tipos/dialog-data';
import { RespGetFilmeById }  from '../tipos/interfaces-servidor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})

export class FilmeComponent implements OnInit {

  filme: Filme;
  usuarioModerador: boolean = false;
  usuario: Usuario;

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
    // Obtém usuário logado
    var usuarioAtual = this.usuarioService.getUser();
    // Atualiza status de moderador para poder oferecer opções exclusivas de moderador.
    this.atualizaUsuario(usuarioAtual);

    // Busca filme id
    this.getFilme();// TODO: Sem servidor

  }
  /**
   *Adiciona um observer ao estado do usuário de logado.
   */
  observerUsuario() {

    this.usuarioService.usuario$.subscribe({

      next: (novoUsuario) => {
        // Atualiza usuário logado
        this.atualizaUsuario(novoUsuario);

        // TODO: Apagar esse log
        console.log(`Observer do filme.component: ${JSON.stringify(novoUsuario)}`);

        this.getFilme();
      }

    });
  }

  atualizaUsuario(novoUsuario: Usuario) {
    this.usuario = novoUsuario;
    // Atualiza status de moderador para poder
    // oferecer opções exclusivas de moderador.
    if (this.usuario != null) {
      this.usuarioModerador = this.usuario.moderador;
    }
  }

  // Obtém filme pelo ido do servidor
  getFilme() {
    console.log('GET FILME' + this.route.snapshot.params.id);
    var id = this.route.snapshot.params.id;

    this.filmeService.getFilmeById(id).subscribe(resposta => {
      console.log("Resposta de getFilmeById em filme.component" + JSON.stringify(resposta));

      if (!resposta.houveErro) {
        this.carregaDadosDoFilme(resposta.filme);
      } else {
        // TODO: Dispara ação quando não acha filme.
        console.error("Erro ao buscar filme por id em filme.component");
      }
    });
  }

  // Essa função carrega os dados do filme na página
  carregaDadosDoFilme(filme: Filme) {

      this.filme = filme;

      // Separa o comentario do usuario se ele existir
      this.ajustaCriticas();
  }


  /* Se o usuário estiver logado vai precisar ver se ele já faz uma crítica
   *  E se esse for o caso precisa-se mostrar essa cŕitica de forma diferente
   */
  ajustaCriticas() {

    if (this.usuario != null) {
      this.criticaDoUsuario = this.getCriticaDoUsuario(this.usuario.login.username);
    } else {
      this.criticaDoUsuario = null;
    }
  }

  /*
  * Extrai a crítica do usuário logado do vetor de críticas para exibir ela separadamente.
  * Após isso, o vetor críticas está pronto para ser exibido.
  */
  getCriticaDoUsuario(username: String): Critica {

    var criticaDoUsuario: Critica = null;

    for (let critica of this.filme.criticas) {
      if (critica.username == username) {
        // Encontra a posição da crítica e a remove do vetor
        var index = this.filme.criticas.indexOf(critica);
        criticaDoUsuario = this.filme.criticas.splice(index, 1)[0];
      }
    }
    return criticaDoUsuario;
  }

  /*
   *  As próximas funções são sobre a caixa de dialogo de crítica
   */
  criticar(): void {

    // Se this.criticaDoUsuario for null quer dizer não fez crítica antes.
    var dados: DialogData = {
      filme: this.filme,
      usuario: this.usuario,
      critica: this.criticaDoUsuario
    };

    const dialogRef = this.dialog.open(CriticaComponent, {
      width: '500px',
      data: dados
    });

    dialogRef.afterClosed().subscribe(filme => {
      console.log('Fechou caixa de dialogo e recebi a resposta:'+ JSON.stringify(filme));

      // Se o usuário fechou  a caixa sem mexer nas críticas ou se ele foi direcionado
      // pra página de login não chegará um filme nesse retorno.
      if (filme != null) {
        this.carregaDadosDoFilme(filme);
      }

    });
  }


}

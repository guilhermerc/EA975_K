import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filtros = [
    {chave: "titulo", rotulo: "Título"},
    {chave: "diretores", rotulo: "Direção"},
    {chave: "elenco", rotulo: "Elenco"},
    {chave: "ano", rotulo: "Ano"},
    {chave: "todos", rotulo: "Todos"}
  ];

  barraDeBusca: String = '';

  usuario: Usuario = null;

  usuarioModerador = false;

  constructor(private router: Router,
              private usuarioService: UsuarioService) {

    this.observerLogDeUsuario();
  }

  ngOnInit() {}

  observerLogDeUsuario() {
    this.usuarioService.usuario$.subscribe({
        next: (novoUsuario) => {
          console.log(`Observer do navbar.component: ${JSON.stringify(novoUsuario)}`);

          this.usuario = novoUsuario;
        }
    });
  }

  atualizaModerador() {

    if (this.usuario != null) {
      if (this.usuario.moderador){

      }
    } else {
      console.log("Erro! Usuário não está logado. Em atualizaModerador()")
    }
  }

  buscaSimples(): void {

    var filtroSelecionado =  (<HTMLInputElement>document.getElementById("filtroSelecionado")).value;
    var pesquisa: String = filtroSelecionado + '/' + this.barraDeBusca;

    // O que estiver nesse vetor é a url da próxima página
    this.router.navigate(
      ['/busca/_' + this.barraDeBusca],
      { queryParams: {
        filtro: filtroSelecionado,
        conteudo: this.barraDeBusca}
      }
    );
  }

  logout() {

    this.usuarioService.logout().subscribe(resposta => {
      console.log("Resposta de logout: " + JSON.stringify(resposta));
        if (resposta.houveErro) {
          console.error("Erro ao fazer o logout");
        }
    });
  }
}

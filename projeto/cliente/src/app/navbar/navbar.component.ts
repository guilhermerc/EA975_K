import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Observable, of } from 'rxjs';

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

  usuario: Usuario;

  usuarioEstaLogado = false;

  usuarioModerador = false;


  constructor(private router: Router,
              private usuarioService: UsuarioService) {

    this.usuarioService.usuarioEstaLogado.subscribe(usuarioEstaLogado => {

      this.usuarioEstaLogado = usuarioEstaLogado;

      console.log("this.usuarioService.usuarioEstaLogado.subscribe()");

      if (usuarioEstaLogado) {
        this.atualizaUsuario();
      }
    });
  }
  ngOnInit() {}

  atualizaUsuario() {
    var usuario = this.usuarioService.getUser();

    if (usuario === null) {
      console.log('Em atualizaUsuario() usuario = null');
    }
    else {
      this.usuario = usuario;
      console.log('novo usuario é: ' + this.usuario.login.username);
    }
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
    this.usuarioService.logout();
  }

}

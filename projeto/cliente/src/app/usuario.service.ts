import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespPostUsuario } from './tipos/interfaces-servidor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Usuario;
  public usuarioEstaLogado: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public login(username: string, senha: string,
    callback: (usuarioLogouComExito: boolean, mensageDeErro: string) => void) {

      console.log('estou em login do servico');
    //requisição

      //chama callback
      // se logou
      if (username == 'guilherme' || username == 'marcelo' ||  username == 'gabriel') {

        //TODO: atribui a this.usuario o ususario obtido pelo servidor
        this.usuario  = {
          login: {
            username: username,
            senha:  ""
          },
          nome: 'String',
        	dataNascimento: new Date(),
        	sexo: 'String',
          moderador: true
        }

        // Atualiza o observable
        this.usuarioEstaLogado.next(true);
        callback(true, null);
      } else {
        var mensagem = "Esta combinação de nome do usuário e senha é inválida.";
        callback(false, mensagem);
      }
  }

  atualizaUsuario(usuario: Usuario) {

    if (usuario != null) {
        this.usuario = usuario;
        this.usuarioEstaLogado.next(true);

    // se usuário for null
    } else if (this.usuario != null) {
      this.usuario = null;
    } else {
        console.log('Usuário já está deslogado');
    }
  }

  public registrar(usuario: Usuario): Observable<RespPostUsuario> {

      var router = "/usuarios/"
      var req = {usuario: usuario};

      console.log('minha req:' + JSON.stringify(req));

      return this.http.post<RespPostUsuario>(router, req).
      pipe(
        // Com tap podemos pegar a resposta antes dela ser retornada.
        tap(resposta => {

          if (!resposta.houveErro) {
            this.atualizaUsuario(usuario);
          }
        }));
  }

  getUser(): Usuario {
    console.log('FLAG DE USUÁRIO: ' + this.usuarioEstaLogado);

    if (this.usuarioEstaLogado) {
      console.log('UsuarioService: Usuário está logado');
      return this.usuario;
    }
    else {
      console.log('UsuarioService: Usuário não está logado');
      return null;
    }
  }

  logout() {
    console.log('Logout no serviço')
    this.usuarioEstaLogado.next(false);
    this.usuario = null;

  }
}

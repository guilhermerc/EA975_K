import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespPostUsuario } from './tipos/interfaces-servidor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario;
  public usuario$: Subject<Usuario> = new Subject<Usuario>();

  constructor(private http: HttpClient) { }

  public registrar(usuario: Usuario): Observable<RespPostUsuario> {

      var router = "/usuarios/"

      var body = JSON.stringify(usuario);

      console.log("body:" + body);

      return this.http.post<RespPostUsuario>(router, body, httpOptions).
      pipe(
        // Com tap podemos pegar a resposta antes dela ser retornada.
        tap(resposta => {

          if (!resposta.houveErro) {
            // Atualiza variável usuário e os observers.
            this.atualizaUsuario(usuario);
          }
        }));
  }

  public login(username: string, senha: string): RespPostUsuario {//Observable<RespPostUsuario> {

      console.log('estou em login do servico');

        // TODO: Requisição http
      // se logou
      if (username == 'guilherme' || username == 'marcelo' ||  username == 'gabriel') {

        //TODO: pega o usuario obtido pelo servidor
        var usuarioLogado  = {
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
        this.atualizaUsuario(usuarioLogado);

        //// TODO: Remover isso depois de criar login no Observer
        if (this.usuario == null) {
          var resposta = {
            houveErro: true,
            mensagemErro: "Esta combinação de nome do usuário e senha é inválida."
          }
          return resposta;
        }
        else {
           var resposta = {
             houveErro: false,
             mensagemErro: ""
           }
           return resposta;
         }

        //var mensagem = "Esta combinação de nome do usuário e senha é inválida.";
      }
  }

  public logout() {
    console.log('Logout no serviço')
    this.atualizaUsuario(null);
  }

  private atualizaUsuario(novoUsuario: Usuario) {

    if (this.usuario != novoUsuario) {
      console.log('Atualização de usuário para: ' + novoUsuario);
      this.usuario = novoUsuario;
      this.usuario$.next(this.usuario);

    } else {
      console.log('Usuário novo é o mesmo do anterior, nada muda!');
    }
  }

  getUser(): Usuario {
    console.log("Usuário retornado em getUser: " + this.usuario);
    return this.usuario;
  }
}

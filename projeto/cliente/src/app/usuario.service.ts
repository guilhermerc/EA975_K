import { Injectable } from '@angular/core';
import { Usuario, Login } from './usuario';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespPostUsuario, RespPostAutenticacao, RespDelUsuario } from './tipos/interfaces-servidor';

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
            this.atualizaUsuario(usuario);// TODO: ATUALIZAR RETORNO E PEGAR USUARIO DE LÁ
          }
        }));
  }

  public login(login: Login): Observable<RespPostAutenticacao> {

      console.log('estou em login do servico');

      var url = '/usuarios/autenticacao';
      var body = JSON.stringify({login: login});

      console.log("body:" + body);

      return this.http.post<RespPostAutenticacao>(url, body, httpOptions).
      pipe(
        // Com tap podemos pegar a resposta antes dela ser retornada.
        tap(resposta => {

          if (!resposta.houveErro) {
            // Atualiza variável usuário e os observers.
            this.atualizaUsuario(resposta.usuario);
          }
        }
      )
    );
  }

  public logout(): Observable<RespDelUsuario> {
    console.log('Logout no usuarioService');

    var url = "/usuarios/autenticacao";

    return this.http.delete<RespDelUsuario>(url, httpOptions).
    pipe(
      // Com tap podemos pegar a resposta antes dela ser retornada.
      tap(resposta => {
      
        if (!resposta.houveErro) {
          // Atualiza variável usuário e os observers.
          this.atualizaUsuario(null);
        }
      }
    )
  );
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

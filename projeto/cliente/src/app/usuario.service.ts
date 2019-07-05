import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Usuario;
  public usuarioEstaLogado: Subject<boolean> = new Subject<boolean>();

  constructor() { }

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

  public registrar(usuario: Usuario,
    callback: (usuarioLogouComExito: boolean, mensageDeErro: string) => void) {

    //TODO: Subustituir por pegar do servidor os dados cadastrados.
      //request
      if (usuario.login.username == 'guilherme' || usuario.login.username == 'marcelo'  ||  usuario.login.username == 'gabriel') {
        //TODO: colocar o usuario recebido do servidor
        this.usuario  = usuario;
        // se logar de verdade
        this.usuarioEstaLogado.next(true);
        callback(true, null);
      } else {
        var mensagem = "Exemplo: Usuário já existente";
        callback(false, mensagem);
      }
  }

  getUser(): Usuario {
    console.log('getUser:' + this.usuarioEstaLogado);

    if (this.usuarioEstaLogado) {
      return this.usuario;
      console.log('get user usuario');
    }
    else {
      console.log('get user null');
      return null;
    }
  }

  logout() {
    console.log('Logout no serviço')
    this.usuarioEstaLogado.next(false);
    this.usuario = null;

  }
}

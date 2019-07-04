import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Usuario;
  public usuarioEstaLogado: Subject<boolean> = new Subject<boolean>();

  public login(username: string, senha: String) {
    this.usuario  = {
      nome: 'String',
    	username: username,
    	dataNascimento: new Date(),
    	sexo: 'String'
    }
    // se logar de verdade
    this.usuarioEstaLogado.next(true);

  }

  public registrar(usuario: Usuario) {
    //TODO: Subustituir por pegar do servidor os dados cadastrados.
    this.usuario  = usuario;

    // se logar de verdade
    this.usuarioEstaLogado.next(true);

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

  constructor() { }
}

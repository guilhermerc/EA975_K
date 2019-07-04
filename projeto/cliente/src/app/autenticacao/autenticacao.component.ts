import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';


export interface Login {
  username: string;
  senha: string;
}

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})

export class AutenticacaoComponent implements OnInit {

  dadosLogin: Login = {
    username: "",
    senha: ""
  };

  mensageDeErro: string;



  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    console.log('this.dadosLogin:'+this.dadosLogin);

  }

  login() {
    console.log('estou em login');

    this.usuarioService.login(this.dadosLogin.username, this.dadosLogin.senha,
      (usuarioLogouComExito: boolean, mensageDeErro: string) => {
        if (usuarioLogouComExito) {
            this.router.navigate(['/']);
            this.mensageDeErro = null;
        }
        else {
          this.mensageDeErro = mensageDeErro;
        }

      }
    );
  }
}

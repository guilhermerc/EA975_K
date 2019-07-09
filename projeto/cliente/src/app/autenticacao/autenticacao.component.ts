import { Component, OnInit } from '@angular/core';
import { Usuario, Login } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

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
  }

  login() {
    console.log('estou em login');

    this.usuarioService.login(this.dadosLogin).subscribe(resposta => {
      console.log("Resposta de login: " + JSON.stringify(resposta));
        if (!resposta.houveErro) {
            // Vai para a página inicial
            this.router.navigate(['/']);
            // Omite mensagem de erro no html
            this.mensageDeErro = null;
        }
        else {
          // Exibe mensagem de erro
          this.mensageDeErro = resposta.mensagemErro;
        }
    });
  }
}

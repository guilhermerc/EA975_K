import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmacaoRegistroComponent } from '../confirmacao-registro/confirmacao-registro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-cadastro-usuario',
  templateUrl: './forms-cadastro-usuario.component.html',
  styleUrls: ['./forms-cadastro-usuario.component.css']
})

export class FormsCadastroUsuarioComponent implements OnInit {

  usuario: Usuario = {
    login: {
      username: "",
      senha:  ""
    },
    nome: "",
  	dataNascimento: null,
  	sexo: "",
    moderador: false
  };

  senha = "";
  repeticaoDeSenha = "";

  registrado = false;
  mensagemErro: string = null;

  sexos = ['Masculino', 'Feminino', 'Outro'];

  constructor(private usuarioService: UsuarioService,
              public dialog: MatDialog,
              private router: Router) { }

  registrar():void {
    // Nesse ponto a senha já foi verificada e pode ser salva no login do usuário.
    this.usuario.login.senha = this.senha;
    this.registrado = true;

    // Hack
    if (this.usuario.login.username == "admin") {
      this.usuario.moderador = true;
    }

    // Inicializa a variável pois já pode ter dado erro anteriormente.
    this.mensagemErro = null;

    // Registra novo usuário
    this.usuarioService.registrar(this.usuario).subscribe(resposta => {
        console.log('Resposta do post de novo usuário:' + JSON.stringify(resposta));

      if (resposta.houveErro) {
        this.mensagemErro = resposta.mensagemErro;
        console.log("houve erro" + this.mensagemErro);
      } else {
        this.login();
      }
    });
  }
  /* Após criar conta é preciso autenticar no sistema
  */
  login() {
    console.log("login pós registro");
    this.usuarioService.login(this.usuario.login).subscribe(resposta => {

      console.log("Resposta de login pós registro: " + JSON.stringify(resposta));
        if (!resposta.houveErro) {

          // Omite mensagem de erro no html
          this.mensagemErro = null;
          this.confirmacaoDeRegistro();
        }
        else {
          // Exibe mensagem de erro
          this.mensagemErro = "Usuário criado com sucesso! Porém ocorreu um erro ao se conectar ao sistema.\nFavor realizar login manualmente." + resposta.mensagemErro;
        }
    });
  }

  /*
  Abra caixa de diálogo com a confirmação de registro de usuário
  */
  confirmacaoDeRegistro() {
    const dialogRef = this.dialog.open(ConfirmacaoRegistroComponent, {
      width: '400px',
      height: '140px'
    });

    dialogRef.afterClosed().subscribe(respostaCaixaDialogo => {
      console.log('Fechou caixa de dialogo');
      console.log('resposta vinda da caixa de dialogo:' + JSON.stringify(respostaCaixaDialogo));

      this.router.navigate(['/']);

    });
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.usuario); }


  ngOnInit() {}




}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
    console.log("construtor");
      this.observerUsuario();
  }

  usuario: Usuario;
  usuarioOriginal: Usuario = this.usuario;
  estaEditando: boolean = false;
  mensagemErro: string;

  sexos = ['Masculino', 'Feminino', 'Outro'];
  novaSenha: string = "";
  repeticaoNovaSenha: string = "";;
  senhaDigitada: string;

  ngOnInit() {
    console.log("init");

    var usuario = this.usuarioService.getUser();

    if (usuario != null) {
      // Faz uma copia do usuário para caso vá editá-lo.
      this.usuario = {...usuario};

      //console.log("copia feita:" + JSON.stringify(this.usuario));// TODO: apagar

    } else {
      console.error("Usuário não encontrado em perfile-usuario");
    }
  }
  /**
   *Adiciona um observer ao estado do usuário de logado.
   */
  observerUsuario() {

    this.usuarioService.usuario$.subscribe({
      next: (novoUsuario) => {
        console.log(`Observer do pesfil-usuario.component: ${JSON.stringify(novoUsuario)}`);

        if (novoUsuario == null) {
            console.log("SAIR DESSA PÁGINA");
            this.usuario = null;
        }
        else {
          console.log("CONTINUO LOGADO");
        }
      }
    });
  }

  editarPerfile() {

    // Faz uma cópia do usuário para comparar depois
    this.usuarioOriginal = {...this.usuario};
    
    // Inicializa as variáveis de senha
    this.novaSenha = "";
    this.repeticaoNovaSenha = "";;
    this.senhaDigitada = "";



    this.estaEditando = true;
  }

  atualizarDados() {
    console.log(JSON.stringify(this.usuario));
    this.mensagemErro = null;

    if (this.senhaDigitada != this.usuarioOriginal.login.senha) {
      this.mensagemErro = "Senha incorreta, tente novamente."
      return;
    }

    var body = {};

    if (this.usuario.nome != this.usuarioOriginal.nome) {
        body["nome"] = this.usuario.nome;
    }

    if (this.usuario.dataNascimento != this.usuarioOriginal.dataNascimento) {
        body["dataNascimento"] = this.usuario.dataNascimento;
    }

    if (this.usuario.sexo != this.usuarioOriginal.sexo) {
        body["sexo"] = this.usuario.sexo;
    }

    // Se a senha não foi alterada então this.novaSenha = ""
    if (this.novaSenha != "" && this.novaSenha != this.usuarioOriginal.login.senha) {

      // registra nova senha
      this.usuario.login.senha = this.novaSenha;

      var login = {};
      login["username"] = this.usuario.login.username;
      login["senha"] = this.novaSenha;
      body["login"] = login;
    }

    var bodyFinal = JSON.stringify(body);

    console.log("Usuário Final" + JSON.stringify(this.usuario));// TODO: apagar
    console.log("body que será enviado:" + bodyFinal);

    this.usuarioService.putUsuario(this.usuario, bodyFinal).subscribe(resposta => {
      console.log("Resposta do putUsuario: " + JSON.stringify(resposta));
      this.estaEditando = false;
    });

  }
}

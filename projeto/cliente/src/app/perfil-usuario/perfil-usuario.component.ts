import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
      this.observerUsuario();
  }

  usuario: Usuario;
  

/*
login: {
		username:   String,
		senha:      String
	},
	nome:           String,
	dataNascimento: String,
	sexo:           String,
	moderador:      Boolean
*/
  ngOnInit() {
    var usuario = this.usuarioService.getUser();

    if (usuario != null) {
      this.usuario = usuario;
    }
  }

  /**
   *Adiciona um observer ao estado do usuário de logado.
   */
  observerUsuario() {

    this.usuarioService.usuarioEstaLogado.subscribe(usuarioEstaLogado => {
      if (!usuarioEstaLogado) {
          console.log("SAIR DESSA PÁGINA");
          this.usuario = null;
      }
      else {
        console.log("CONTINUO LOGADO");
      }
    });
  }
  atualizarDados() {
    console.log(JSON.stringify(this.usuario));
  }

}

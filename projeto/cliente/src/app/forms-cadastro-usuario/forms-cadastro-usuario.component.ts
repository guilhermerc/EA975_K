import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


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

  registrado = false;
  sexos = ['Masculino', 'Feminino', 'Outro'];



  registrar():void {
    this.registrado = true;
    this.usuarioService.registrar(this.usuario).subscribe(resposta => {
      console.log('Resposta do post de novo usuário:' + JSON.stringify(resposta));
    });

  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.usuario); }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {  }

}

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
    nome: "",
  	username: 'banana2',
  	dataNascimento: new Date(),
  	sexo: "",
  	fotoPerfil: ""
  };

  registrado = false;
  sexos = ['Masculino', 'Feminino', 'Outro'];



  registrar():void {
    this.registrado = true;
    this.usuarioService.registrar(this.usuario);

  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.usuario); }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {  }

}

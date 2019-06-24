import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-forms-cadastro-usuario',
  templateUrl: './forms-cadastro-usuario.component.html',
  styleUrls: ['./forms-cadastro-usuario.component.css']
})
export class FormsCadastroUsuarioComponent implements OnInit {

  usuario = new Usuario('','',new Date(),'');


  registrado = false;
  sexos = ['Masculino', 'Feminino', 'Outro'];



  registrar():void {
    console.log("registrar");
    this.registrado = true;
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.usuario); }

  constructor() { }

  ngOnInit() {
    console.log('Sabe,' + this.usuario.sexo);
  }

}

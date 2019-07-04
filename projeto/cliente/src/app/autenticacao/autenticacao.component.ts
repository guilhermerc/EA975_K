import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}

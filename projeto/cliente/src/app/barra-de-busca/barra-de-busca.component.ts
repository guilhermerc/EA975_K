import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../../assets/filme';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrls: ['./barra-de-busca.component.css']
})
export class BarraDeBuscaComponent implements OnInit {

  filtros = ["Título", "Diretor", "Elenco", "Ano", "Todos"];

  constructor() { }

  ngOnInit() {
  }

}

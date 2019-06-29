import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../../assets/filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {


  filme: Filme = {
    titulo: "",
    ano: 0,
    diretor: "",
    elenco: ""
    //comentarios: [{}],
    //imagens: [""]
  };
  log: Filme[] = [this.filme, this.filme, this.filme];
  pokemon():void {

    this.filmeService.getFilme("/pokemon").subscribe(filmes => this.filme = filmes[0]);
  }

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
  }

  buscaSimples(infoPesquisada: String): void {
    this.filmeService.getFilme(infoPesquisada).subscribe(filmes => this.log = filmes);
  }

}

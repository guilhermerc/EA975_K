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
    titulo: "Teste",
    ano: 123,
    diretor: "",
    elenco: ""
    //comentarios: [{}],
    //imagens: [""]
  };
  filmesEncontrados: Filme[] = [this.filme, this.filme, this.filme];


  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
  }

  buscaSimples(infoPesquisada: String): void {
    this.filmeService.getFilme(infoPesquisada).subscribe(filmes => this.filmesEncontrados = filmes);
  }

}

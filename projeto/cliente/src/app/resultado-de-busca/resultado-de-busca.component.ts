import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Filme } from '../../assets/filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-resultado-de-busca',
  templateUrl: './resultado-de-busca.component.html',
  styleUrls: ['./resultado-de-busca.component.css']
})
export class ResultadoDeBuscaComponent implements OnInit {


  filme: Filme = { titulo: "Toy Story 4", ano: 2019,diretor: "",elenco: ""};

  filmesEncontrados: Filme[] = [this.filme, this.filme, this.filme];

  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location) {
                console.log('oi');
              }

  getFilmes(params: {[key: string]: any;}){
    console.log('estou no getfilmes');
    var conteudo = params.conteudo;
    var filtro = params.filtro;

    var router = filtro + '/' + conteudo;
    console.log('router' + router);

    this.filmeService.getFilme(router).subscribe(filmes => {
      this.filmesEncontrados = filmes;
      console.log(filmes);
    });

  }

  ngOnInit() {
    //this.route.snapshot.queryParams.subscribe(params => {this.getFilmes(params);});
    var params = this.route.snapshot.queryParams;
    this.getFilmes(params);
  }

}

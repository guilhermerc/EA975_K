import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Filme } from '../../assets/filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-resultado-de-busca',
  templateUrl: './resultado-de-busca.component.html',
  styleUrls: ['./resultado-de-busca.component.css']
})
export class ResultadoDeBuscaComponent implements OnInit {

  filme: Filme = {
    id: "vingadoresultimato1234",
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    diretor: " Anthony Russo, Joe Russo",
    elenco: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    comentarios: [{username: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},
                  {username: "marcelo", data: "12/12/2012", texto: "adorei, mas nem tanto uma porcaria"}],
    imagens: ["/assets/images/vingadores_0.jpg"],
    sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
  };

  filmesEncontrados: Filme[] = [this.filme, this.filme, this.filme];

  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location) {
                console.log('oi');
              }

  getFilmes(params: {[key: string]: any;}){

    var conteudo = params.conteudo;
    var filtro = params.filtro;
    var router = filtro + '/' + conteudo;

    console.log('agora vai router[' + router + ']');

    this.filmeService.getFilme(router).subscribe(filmes => {
      //window.location.reload();
      this.filmesEncontrados = filmes;
      console.log('Filmes retornados' + filmes+']');

    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // TODO: Sem servidor
      //this.getFilmes(this.route.snapshot.queryParams);

    });

  }

}

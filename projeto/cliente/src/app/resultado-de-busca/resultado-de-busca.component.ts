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


  filme: Filme = { titulo: "Toy Story 4", ano: 2019,diretor: "Guilherme",elenco: "", id: "toystory",
                   "comentarios": [{usurname: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"}],
                    imagens: [""], sinopse: ""};//,{usurname: "marcelo", data: "12/12/2012", texto: "adorei, achei uma porcaria"},{usurname: "guilherme", data: "12/12/2012", texto: "adorei, achei uma porcaria"},{usurname: "Gabriel", data: "12/12/2012", texto: "adorei, achei uma porcaria"},{usurname: "maiara", data: "12/12/2012", texto: "adorei, achei uma porcaria"}]};

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
      this.getFilmes(this.route.snapshot.queryParams);

    });

  }

}

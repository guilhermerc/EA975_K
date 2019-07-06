import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { RespostaServidorFilmes }  from '../tipos/interfaces-servidor';

@Component({
  selector: 'app-resultado-de-busca',
  templateUrl: './resultado-de-busca.component.html',
  styleUrls: ['./resultado-de-busca.component.css']
})
export class ResultadoDeBuscaComponent implements OnInit {

  filme: Filme = {
    id: 2,
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    diretores: [{nome: "Russo1"}, {nome: "Russo2"}],
    elenco: [{nome: "Robert Downey Jr"}, {nome: "Scarlett Johansson"}],
    criticas: [{username: "guilherme", data: "12/12/2012", comentario: "adorei, achei uma porcaria", nota: 9},
                  {username: "marcelo", data: "12/12/2012", comentario: "adorei, mas nem tanto", nota: 8}],
    imagens: ["/assets/images/vingadores_0.jpg"],
    sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
  };

  filmesEncontrados: Filme[] = [this.filme, this.filme, this.filme];// TODO: Sem Servidor

  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.getFilmes(this.route.snapshot.queryParams);// TODO: Sem servidor
    });
  }

  getFilmes(params: {[key: string]: any;}){

    var conteudo = params.conteudo;
    var filtro = params.filtro;
    var router: string;

    if (conteudo.length > 0) {
      console.log('string não vazia');
      router = filtro + '/' + conteudo;
    } else {
      console.log('string vazia');
      router = "";
    }

    console.log('Vai buscar lista de filmes [' + router + ']');

    this.filmeService.getFilme(router).subscribe(resposta => {
      console.log('Resposta ao pegar lista de filmes:' + JSON.stringify(resposta))

      if (!resposta.houveErro) {
        this.filmesEncontrados = resposta.filmes;
        /*
        if (this.filmesEncontrados.length > 0) {
        } else {
          // TODO: Dispara ação quando não acha filme.
          console.log("nenhumFilmeFoiEncontrado");
        }*/
      } else {
        // Houve erro
        console.log(resposta.mensagemErro)
      }


      console.log('Filmes retornados' + resposta.filmes+']');

    });

  }
}

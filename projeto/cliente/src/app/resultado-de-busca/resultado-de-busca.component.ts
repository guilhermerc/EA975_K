import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-resultado-de-busca',
  templateUrl: './resultado-de-busca.component.html',
  styleUrls: ['./resultado-de-busca.component.css']
})
export class ResultadoDeBuscaComponent implements OnInit {

  filme: Filme;
   /*= {
    id: "2",
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    diretores: [{nome: "Russo1"}, {nome: "Russo2"}],
    elenco: [{nome: "Robert Downey Jr"}, {nome: "Scarlett Johansson"}],
    criticas: [{username: "guilherme", data: "12/12/2012", comentario: "adorei, achei uma porcaria", nota: 9},
                  {username: "marcelo", data: "12/12/2012", comentario: "adorei, mas nem tanto", nota: 8}],
    imagens: ["/assets/images/vingadores_0.jpg"],
    sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
  };*/

  // Não pode ser null nunca pois o html usa seus valores de length
  filmesEncontrados: Filme[] = [];// = [this.filme, this.filme, this.filme];// TODO: Sem Servidor

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

    this.filmeService.getFilmes(filtro, conteudo).subscribe(resposta => {
      console.log('Resposta ao pegar lista de filmes:' + JSON.stringify(resposta))

      if (!resposta.houveErro) {
        this.filmesEncontrados = resposta.filmes;

      } else {
        // Houve erro
        console.error(resposta.mensagemErro)
      }
    });
  }
}

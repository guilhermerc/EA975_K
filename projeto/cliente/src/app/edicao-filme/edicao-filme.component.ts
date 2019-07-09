import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { Critica } from '../tipos/critica';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmeService } from '../filme.service';
import { RespostaServidorFilmes }  from '../tipos/interfaces-servidor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao-filme',
  templateUrl: './edicao-filme.component.html',
  styleUrls: ['./edicao-filme.component.css']
})
export class EdicaoFilmeComponent implements OnInit {

  filme: Filme = {
    id: "",
    titulo: "",
    ano: null,
    diretores: [],
    elenco: [],
    criticas: [],
    sinopse: ""
  };

  novoAtor: string;
  novoDiretor: string;
  filmeOriginal: Filme = new Filme();

  criacaoDeFilme: boolean;
  mensagemErro: string = null;

  constructor(
                private route: ActivatedRoute,
                private filmeService: FilmeService,
                private location: Location,
                private router: Router
  ) { }

  ngOnInit() {

    var url = this.router.url;

    if (url == '/incluir-filme') {
      this.criacaoDeFilme = true;
    } else {
      this.criacaoDeFilme = false;
      this.getFilme();
    }
  }

  clonarFilme() {
    this.filmeOriginal = {...this.filme};
    this.filmeOriginal.elenco = [...this.filme.elenco];
    this.filmeOriginal.diretores = [...this.filme.diretores];
    this.filmeOriginal.criticas = [...this.filme.criticas];
  }

  getFilme() {
    console.log('GET FILME EM EDIÇÃO' + this.route.snapshot.params.id);
    var id = this.route.snapshot.params.id;

    this.filmeService.getFilmeById(id).subscribe(resposta => {
      this.carregaDadosDoFilme(resposta);
    });
  }

  // Essa função carrega os dados do filme na página
  carregaDadosDoFilme(resposta: RespostaServidorFilmes) {
    console.log('resposta do server:' + JSON.stringify(resposta));

    if (!resposta.houveErro) {

      if (resposta.filmes.length > 0) {
        this.filme = resposta.filmes[0];
        console.log('achou um filme');

        // Faz cópia de filme para comparar depois
        this.clonarFilme();
      } else {
        // TODO: Dispara ação quando não acha filme.
        console.log("nenhumFilmeFoiEncontrado");
      }
    } else {
      // Houve erro
      console.log("ERRO!");
      console.log(resposta.mensagemErro)
    }
  }



  removerAtor(nome: string) {

    var index = -1;
    for (let pessoa of this.filme.elenco) {
      if (pessoa.nome == nome) {
        index = this.filme.elenco.indexOf(pessoa);
      }
    }

    if (index != -1) {
      this.filme.elenco.splice(index, 1);
    }
  }

  adicionarAtor() {
    var ator = {nome: this.novoAtor};

    this.filme.elenco.push(ator);
    this.novoAtor = "";
  }

  removerDiretor(nome: string) {

    var index = -1;
    for (let pessoa of this.filme.diretores) {
      if (pessoa.nome == nome) {
        index = this.filme.diretores.indexOf(pessoa);
      }
    }

    if (index != -1) {
      this.filme.diretores.splice(index, 1);
    }
  }


  adicionarDiretor() {
    var diretor = {nome: this.novoDiretor};
    this.filme.diretores.push(diretor);
    this.novoDiretor = "";
  }

  removerCritica(username: string) {

    var index = -1;

    for (let critica of this.filme.criticas) {
      if (critica.username == username) {
        index = this.filme.criticas.indexOf(critica);
      }
    }

    if (index != -1) {
      this.filme.criticas.splice(index, 1);
    }

  }

  salvar() {
    var body = {};

    if (this.filme.titulo != this.filmeOriginal.titulo) {
        body["titulo"] = this.filme.titulo;
    }

    if (JSON.stringify(this.filme.diretores) != JSON.stringify(this.filmeOriginal.diretores)) {
      body["diretores"] = this.filme.diretores;
    }

    if (this.filme.ano != this.filmeOriginal.ano) {
      body["ano"] = this.filme.ano;
    }

    if (JSON.stringify(this.filme.elenco) != JSON.stringify(this.filmeOriginal.elenco)) {
      body["elenco"] = this.filme.elenco;
    }
    if (this.filme.sinopse != this.filmeOriginal.sinopse) {
      body["sinopse"] = this.filme.sinopse;
    }
    if (JSON.stringify(this.filme.criticas) != JSON.stringify(this.filmeOriginal.criticas)) {
      body["criticas"] = this.filme.criticas;
    }

    var bodyFinal = JSON.stringify(body);

    console.log("body que será enviado:" + bodyFinal);

    this.filmeService.putFilme(this.filme.id, bodyFinal).subscribe(resposta => {
      console.log("Resposta do putFilme: " + JSON.stringify(resposta));
      this.router.navigate(['filme/' + this.filme.id]);
    });
  }

  removerFilme() {
    console.log("remover filme");

    this.filmeService.deleteFilme(this.filme.id).subscribe(resposta => {
      console.log("Resposta do deleteFilme: " + JSON.stringify(resposta));
      this.router.navigate(['/']);
    });
  }

  adicionarFilme() {
    this.filmeService.postFilme(this.filme).subscribe(resposta => {
      console.log("Resposta do postFilme: " + JSON.stringify(resposta));

      if (resposta.houveErro) {
        this.mensagemErro = resposta.mensagemErro;
      } else {
        var filmeId = "x";//resposta.filme.id; // TODO: Sem servidor
        this.router.navigate(['filme/' + filmeId]);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { Critica } from '../tipos/critica';

@Component({
  selector: 'app-edicao-filme',
  templateUrl: './edicao-filme.component.html',
  styleUrls: ['./edicao-filme.component.css']
})
export class EdicaoFilmeComponent implements OnInit {

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
  elencoEdicao: string[] = ["Steve Rogers", "Chris Evans", "Natasha Romanov", "Scarlett Johansson"];
  novoAtor: string;
  direcaoEdicao: string[] = ["Steve Rogers", "Chris Evans", "Natasha Romanov", "Scarlett Johansson"];
  novoDiretor: string;

  criticasEdicao: Critica[] = [
    {username: "eu", data: "hoje", comentario: "ruim", nota: 1},
    {username: "tu", data: "hoje", comentario: "mé", nota: 1},
    {username: "ele", data: "hoje", comentario: "mt ruim", nota: 1},
    {username: "vós", data: "hoje", comentario: "ruim, gostei", nota: 1}
  ];

  constructor() { }

  ngOnInit() {
  }

  removerAtor(nome: string) {
    console.log("remover Ator");
    var index = this.elencoEdicao.indexOf(nome);
    this.elencoEdicao.splice(index, 1);
  }

  adicionarAtor() {
    this.elencoEdicao.push(this.novoAtor);
    this.novoAtor = "";
  }

  removerDiretor(nome: string) {
    var index = this.direcaoEdicao.indexOf(nome);
    this.direcaoEdicao.splice(index, 1);
  }

  adicionarDiretor() {
    this.direcaoEdicao.push(this.novoDiretor);
    this.novoDiretor = "";
  }

  removerCritica() {

  }

  salvar() {

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Filme } from '../../assets/filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

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

// TODO: Remover filme inicial


  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location) { }



  ngOnInit() {
    var idFile = this.route.snapshot.params.id;

    // TODO: Sem servidor
    //this.filmeService.getFilme('id/' + idFile).subscribe(filmes => {this.filme = filmes[0];});



  }



}

import { Component } from '@angular/core';
import { FilmeService } from './filme.service';
import { Filme } from '../assets/filme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cliente';
  log:String = "começo";
  filme: Filme = {
    titulo: "",
    ano: 0,
    diretor: "",
    elenco: ""
    //comentarios: [{}],
    //imagens: [""]
  };

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {

  }
  pokemon():void {

    this.filmeService.getFilme("/pokemon").subscribe(filme => this.filme = filme);
  }

  getfilmes():void {

    this.filmeService.getFilme("").subscribe(filme => this.filme = filme);
  }
}

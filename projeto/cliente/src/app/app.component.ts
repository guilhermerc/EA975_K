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
  filme: Filme = {titulo: "teste",ano:2};

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {

  }
  getfilme():void {

    this.filmeService.getFilme().subscribe(filme => this.filme = filme);
  }
}

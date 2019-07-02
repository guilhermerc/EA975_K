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

  filme: Filme;



  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location) { }



  ngOnInit() {
    var idFile = this.route.snapshot.params.id;

    this.filmeService.getFilme('id/' + idFile).subscribe(filmes => {
      this.filme = filmes[0];
      console.log('votlamos');

    });



  }



}


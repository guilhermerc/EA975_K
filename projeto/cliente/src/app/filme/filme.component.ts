import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Filme } from '../../assets/filme';
import { FilmeService } from '../filme.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CriticaComponent } from '../critica/critica.component';


export interface DialogData {
  animal: string;
  name: string;
}

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
    criticas: [{username: "guilherme", data: "12/12/2012", comentario: "adorei, achei uma porcaria", nota: 9},
                  {username: "marcelo", data: "12/12/2012", comentario: "adorei, mas nem tanto", nota: 8}],
    imagens: ["/assets/images/vingadores_0.jpg"],
    sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
  };

// TODO: Remover filme inicial


criticaDialogRef: MatDialogRef<CriticaComponent>;

  filmeAvaliado: boolean = false;

  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location,
              public dialog: MatDialog) { }



  ngOnInit() {
    var idFile = this.route.snapshot.params.id;

    // TODO: Sem servidor
    //this.filmeService.getFilme('id/' + idFile).subscribe(filmes =>
    //{
      //this.filme = filmes[0];
      this.filmeAvaliado = this.filmeFoiAvaliado('guilherme');
    //});

  }

  criticar(): void {
    const dialogRef = this.dialog.open(CriticaComponent, {
      width: '500px',
      data: {filme: this.filme}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  filmeFoiAvaliado(username: String): boolean {
    var avaliado = false;
    for (let critica of this.filme.criticas) {
      if (critica.username == username) {
        avaliado = true;
      }
    }
    console.log(avaliado);
    return avaliado;
  }
}

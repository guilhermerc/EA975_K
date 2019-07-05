import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import { Usuario } from '../usuario';
import { Critica } from '../tipos/critica';
import { DialogData } from '../tipos/dialog-data';





@Component({
  selector: 'app-critica',
  templateUrl: './critica.component.html',
  styleUrls: ['./critica.component.css']
})
export class CriticaComponent implements OnInit {

  usuario: Usuario;
  filme: Filme;
  critica: Critica = {
    username: "a",
    data: null,
    comentario: "",
    nota: 0
  }

  primeiraVez: boolean = true;

  notasPossiveis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // precisa receber o filme e o usuario
   constructor(
     public dialogRef: MatDialogRef<CriticaComponent>,
     private filmeService: FilmeService,
     @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      console.log('data:' + JSON.stringify(data));

      this.usuario = data.usuario;
      this.filme = data.filme;

      if (data.critica != null) {
        this.critica = data.critica;
        this.primeiraVez = false;
      }
    }

  ngOnInit() {
  }

  botaoEntrar() {
    this.dialogRef.close();
  }

  fazerCritica() {
    if (this.primeiraVez) {
      // post
    } else {
      //put
    }
    //close na callback
  }

  removerCritica() {
    //delet

  }

}

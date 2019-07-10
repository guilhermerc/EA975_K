import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import { Usuario } from '../usuario';
import { Critica } from '../tipos/critica';
import { DialogData } from '../tipos/dialog-data';
import { Router } from '@angular/router';





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
     private router: Router,
     @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      console.log('data:' + JSON.stringify(data));

      this.usuario = data.usuario;
      this.filme = data.filme;

      if (data.critica != null) {

        // Sinaliza de que se trata de uma edição de crítica
        this.primeiraVez = false;

        // Copia dos parametros da crítica
        this.critica.username = data.critica.username;
        this.critica.comentario = data.critica.comentario;
        this.critica.nota = data.critica.nota;

      }
    }

  ngOnInit() {
  }

  autenticar() {
    this.router.navigate(['/autenticacao']);
    this.dialogRef.close(null);
  }

  submeterCritica() {

    // Atualiza a data
    var date = new Date();
    this.critica.data = date.toDateString();

    // Se é a primeira vez faz post
    if (this.primeiraVez) {
      this.filmeService.postCritica(this.filme.id, this.critica)
      .subscribe(resposta => {
        console.log('resposta do post da critica:' + JSON.stringify(resposta));
        //// TODO: senão tiver erro
        this.dialogRef.close(resposta.filme);
      });

    // Senão faz put
    } else {
      this.filmeService.putCritica(this.filme.id, this.usuario.login.username,this.critica)
      .subscribe(resposta => {

        console.log("Resposta do putCritica: " + JSON.stringify(resposta));
        //// TODO: senão tiver erro
        this.dialogRef.close(resposta.filme);
      });
    }
  }

  removerCritica() {
    console.log("Estou em remover Critica");

    this.filmeService.deleteCritica(this.filme.id, this.usuario.login.username)
    .subscribe(resposta => {
      console.log("Resposta do deleteCritica: " + JSON.stringify(resposta));

      if (!resposta.houveErro) {
        this.dialogRef.close(resposta.filme);
      }
    });
  }
}

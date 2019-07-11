import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FilmeService } from '../filme.service';
import { Filme, Critica } from '../filme';
import { Usuario } from '../usuario';
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

  critica: Critica;

  primeiraVez: boolean = true;

  notasPossiveis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // precisa receber o filme e o usuario
   constructor(
     public dialogRef: MatDialogRef<CriticaComponent>,
     private filmeService: FilmeService,
     private router: Router,
     @Inject(MAT_DIALOG_DATA) public dados: DialogData
    ) {
      console.log('parâmetro recebido na caixa de diálogo:' + JSON.stringify(dados));

      this.usuario = dados.usuario;
      this.filme = dados.filme;

      if (dados.critica != null) {

        // Sinaliza de que se trata de uma edição de crítica
        this.primeiraVez = false;

        // Copia a crítica já existente
        this.critica = {...dados.critica};


        // Caso seja uma crítica nova precisa incializar uma nova crítica
      } else {
        this.critica = {
          username: null,
          data: null,
          comentario: null,
          nota: null
        };
      }
    }

  ngOnInit() {}

  // Caso o usuário não esteja logado redireciona ele para a página de login
  autenticar() {
    this.router.navigate(['/autenticacao']);
    this.dialogRef.close(null);
  }

  submeterCritica() {
    console.log("submeter crítica");
    // Atualiza a data
    this.critica.data = (new Date()).toLocaleString();
    
    // Se o usuário tem acesso a essas opções quer dizer que ele está logado
    // portanto this.usuario.login não é null
    this.critica.username = this.usuario.login.username;

    // Se é a primeira vez faz post
    if (this.primeiraVez) {
      console.log('primeira vez'); // TODO: apagar
      this.filmeService.postCritica(this.filme.id, this.critica)
      .subscribe(resposta => {
        console.log('resposta do post da critica:' + JSON.stringify(resposta));
        //// TODO: senão tiver erro
        this.dialogRef.close(resposta.filme);
      });

    // Senão faz put
    } else {
      console.log('não é a primeira vez'); // TODO: apagar
      this.filmeService.putCritica(this.filme.id, this.critica)
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

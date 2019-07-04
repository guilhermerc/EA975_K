import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CriticaComponent } from '../critica/critica.component';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';



export interface Critica {
    username: string;
    data: string;
    comentario: string;
    nota: Number;
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

  criticaDoUsuario: Critica;

  constructor(private route: ActivatedRoute,
              private filmeService: FilmeService,
              private location: Location,
              public dialog: MatDialog,
              private usuarioService: UsuarioService) {

  this.usuarioService.usuarioEstaLogado.subscribe(usuarioEstaLogado => {

    console.log("this.usuarioService.usuarioEstaLogado.subscribe()");

    this.ajustaCriticaDoUsuario();
  });
  }



  ngOnInit() {
    var idFile = this.route.snapshot.params.id;

    // TODO: Sem servidor
    //this.filmeService.getFilme('id/' + idFile).subscribe(filmes =>
    //{
      //this.filme = filmes[0];
      console.log('Estou no ngOnInit');
      this.ajustaCriticaDoUsuario();
    //});

  }

  // Se o usuário estiver logado vai precisar ver se ele já faz uma crítica
  // E se esse for o caso precisa-se mostrar essa cŕitica de forma diferente
  ajustaCriticaDoUsuario() {
    console.log('estou em ajustaCriticaDoUsuario()');

    var user = this.usuarioService.getUser();
    console.log('estou em ajustaCriticaDoUsuario()+ user:' + user);

    if (user != null) {
          console.log('criticaDoUsuario antes:' + JSON.stringify(this.criticaDoUsuario));
          this.criticaDoUsuario = this.getCriticaDoUsuario(user.username);
          console.log('criticaDoUsuario depois:' + JSON.stringify(this.criticaDoUsuario));

          console.log('criticado usuario'+this.criticaDoUsuario);
    } else {
      console.log('else do ajustaCriticaDoUsuario()');
      this.criticaDoUsuario = null;
    }
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

  getCriticaDoUsuario(username: String): Critica {
    var index = -1;
    var critica: any;
    for (let critica of this.filme.criticas) {
      if (critica.username == username) {
        index = this.filme.criticas.indexOf(critica);
      }
    }
    if (index != -1) {
      console.log('criticas antes:' + JSON.stringify(this.filme));
      critica = this.filme.criticas.splice(index, 1)[0];
      console.log('criticas depois:' + JSON.stringify(this.filme));
      console.log('retirado:' + JSON.stringify(critica));
      return critica;
    } else {

      return null;
    }
  }
}

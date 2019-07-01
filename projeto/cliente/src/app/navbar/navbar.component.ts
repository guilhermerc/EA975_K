import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  filtroIds = ['titulo', 'diretor', 'elenco', 'ano', 'todos'];
  filtrosExibidos = ['Título', 'Diretor', 'Elenco', 'Ano', 'Todos'];

  barraDeBusca: String = '';



  constructor(private router: Router) { }

  ngOnInit() {
  }


  buscaSimples(): void {
    var filtroEscolhido =  (<HTMLInputElement>document.getElementById("filtroDePesquisa")).value;
    var index = this.filtrosExibidos.indexOf(filtroEscolhido);
    var idFiltro = this.filtroIds[index];

    var pesquisa: String = idFiltro + '/' + this.barraDeBusca;
    console.log (pesquisa);



    this.router.navigate(['/busca/_' + this.barraDeBusca],
                         { queryParams: {filtro: idFiltro, conteudo: this.barraDeBusca} });

  }

}

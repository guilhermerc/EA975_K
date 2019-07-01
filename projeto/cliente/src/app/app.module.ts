import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { FilmeComponent } from './filme/filme.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FormsCadastroUsuarioComponent } from './forms-cadastro-usuario/forms-cadastro-usuario.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { ResultadoDeBuscaComponent } from './resultado-de-busca/resultado-de-busca.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    FilmeComponent,
    PerfilUsuarioComponent,
    FormsCadastroUsuarioComponent,
    BarraDeBuscaComponent,
    ResultadoDeBuscaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

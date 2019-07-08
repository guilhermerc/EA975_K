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
import { ResultadoDeBuscaComponent } from './resultado-de-busca/resultado-de-busca.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDialogModule } from '@angular/material';
import { CriticaComponent } from './critica/critica.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestaServidorComponent } from './testa-servidor/testa-servidor.component';
import { ConfirmacaoRegistroComponent } from './confirmacao-registro/confirmacao-registro.component';



@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    FilmeComponent,
    PerfilUsuarioComponent,
    FormsCadastroUsuarioComponent,
    ResultadoDeBuscaComponent,
    NavbarComponent,
    CriticaComponent,
    TestaServidorComponent,
    ConfirmacaoRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    CriticaComponent,
    ConfirmacaoRegistroComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FilmeComponent } from './filme/filme.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { ResultadoDeBuscaComponent } from './resultado-de-busca/resultado-de-busca.component';
import { TestaServidorComponent } from './testa-servidor/testa-servidor.component';
import { EdicaoFilmeComponent } from './edicao-filme/edicao-filme.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, default
  { path: 'perfil/:id', component: PerfilUsuarioComponent},
  { path: 'filme/:id', component: FilmeComponent},
  { path: 'autenticacao', component: AutenticacaoComponent},
  { path: 'busca/:id', component: ResultadoDeBuscaComponent},
  { path: 'home', component: PerfilUsuarioComponent},
  { path: 'developer', component: TestaServidorComponent},
  { path: 'edicao-filme/:id', component: EdicaoFilmeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

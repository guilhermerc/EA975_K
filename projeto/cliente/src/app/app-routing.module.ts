import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { FilmeComponent } from './filme/filme.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, default
  { path: 'perfil/:id', component: PerfilUsuarioComponent},
  { path: 'filme/:id', component: FilmeComponent},
  { path: 'autenticacao', component: AutenticacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

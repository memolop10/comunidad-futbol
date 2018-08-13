import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component'
import { EventosComponent } from './eventos/eventos.component'
import { JugarComponent } from './jugar/jugar.component'
import { QuienesComponent } from './quienes/quienes.component'


const routes: Routes = [
  {
    path: 'principal',
    component: PaginaprincipalComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'jugar',
    component: JugarComponent
  },
  {
    path: 'quienes',
    component: QuienesComponent
  },
  { path: '', redirectTo: 'principal', pathMatch: 'full' }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  //declarations: []
})
export class AppRoutingModule { }

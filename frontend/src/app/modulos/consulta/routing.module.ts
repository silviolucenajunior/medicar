import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaListagemPage } from './pages/listagem.page';
import { ConsultaCadastroPage } from './pages/cadastro.page';

const routes : Routes  = [
  { 'path': 'consultas', component: ConsultaListagemPage, pathMatch: 'full'},
  { 'path': 'consultas/cadastro', component: ConsultaCadastroPage, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConsultaRoutingModule {}
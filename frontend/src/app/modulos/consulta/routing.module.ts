import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaListagemPage } from './pages/listagem.page';
import { ConsultaCadastroPage } from './pages/cadastro.page';

import { AuthGuard } from '../auth/auth.guards';

const routes : Routes  = [
  { 'path': 'consultas', component: ConsultaListagemPage, canActivate: [AuthGuard], pathMatch: 'full'},
  { 'path': 'consultas/cadastro', component: ConsultaCadastroPage, canActivate: [AuthGuard], pathMatch: 'full' },
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
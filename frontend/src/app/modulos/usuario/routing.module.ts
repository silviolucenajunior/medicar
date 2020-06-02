import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioPage } from './pages/login.page';
import { CadastroUsuarioPage } from './pages/cadastro.page';

const routes : Routes  = [
  { 'path': 'login', component: LoginUsuarioPage, },
  { 'path': 'cadastro', component: CadastroUsuarioPage, }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule {}
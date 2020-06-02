import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CadastroUsuarioComponent } from './components/cadastro.component';
import { LoginUsuarioComponent } from './components/login.component';
import { CadastroUsuarioPage } from './pages/cadastro.page';
import { LoginUsuarioPage } from './pages/login.page';
import { UsuarioRoutingModule } from './routing.module';
import { UsuarioService } from './usuario.services';

@NgModule({
  imports: [
    UsuarioRoutingModule,
    SharedModule
  ],
  declarations: [
    CadastroUsuarioComponent,
    LoginUsuarioComponent,
    CadastroUsuarioPage,
    LoginUsuarioPage
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule {}
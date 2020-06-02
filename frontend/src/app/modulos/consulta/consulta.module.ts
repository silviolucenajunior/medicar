import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './routing.module';
import { ListaConsultaComponent } from './components/lista.component';
import { CadastroConsultaComponent } from './components/cadastro.component';
import { ConsultaListagemPage } from './pages/listagem.page';
import { ConsultaCadastroPage } from './pages/cadastro.page';

@NgModule({
  imports: [
    ConsultaRoutingModule
  ],
  declarations: [
    ListaConsultaComponent,
    CadastroConsultaComponent,
    ConsultaListagemPage,
    ConsultaCadastroPage,
  ]
})
export class ConsultaModule {}

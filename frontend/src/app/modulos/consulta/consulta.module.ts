import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { ConsultaRoutingModule } from './routing.module';
import { ListaConsultaComponent } from './components/lista.component';
import { CadastroConsultaComponent } from './components/cadastro.component';
import { ConsultaListagemPage } from './pages/listagem.page';
import { ConsultaCadastroPage } from './pages/cadastro.page';
import { ConsultasService } from './consulta.service';

import { MedicoModule } from '../medico/medico.module';
import { EspecialidadeModule } from '../especialidade/especialidade.module';
import { AgendaModule } from '../agenda/agenda.module'
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ConsultaRoutingModule,
    MedicoModule,
    EspecialidadeModule,
    AgendaModule,
    SharedModule
  ],
  declarations: [
    ListaConsultaComponent,
    CadastroConsultaComponent,
    ConsultaListagemPage,
    ConsultaCadastroPage,
  ],
  providers: [
    ConsultasService
  ]
})
export class ConsultaModule {}

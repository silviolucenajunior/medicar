import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgendaService } from './agenda.services';
import { AgendaSelectComponent } from './components/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AgendaSelectComponent
  ],
  providers: [
    AgendaService
  ],
  exports: [
    AgendaSelectComponent
  ]
})
export class AgendaModule {}
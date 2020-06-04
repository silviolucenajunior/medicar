import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedicoSelectComponent } from './components/select.component';
import { MedicoService } from './medico.services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MedicoSelectComponent
  ],
  providers: [
    MedicoService
  ],
  exports: [
    MedicoSelectComponent
  ]
})
export class MedicoModule {}
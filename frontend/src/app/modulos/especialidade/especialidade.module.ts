import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { EspecialidadeSelectComponent } from './components/select.component';
import { EspecialidadeService } from './especialidade.services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EspecialidadeSelectComponent
  ],
  providers: [
    EspecialidadeService
  ],
  exports: [
    EspecialidadeSelectComponent
  ]
})
export class EspecialidadeModule {}
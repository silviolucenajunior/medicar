import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';

import { MedicoService } from '../medico.services';
import { Medico } from '../types/medico';

@Component({
  selector: 'medico-select',
  templateUrl: './select.component.html'
})
export class MedicoSelectComponent implements OnInit, OnChanges {
  @Input() especialidade = null;
  medicos : Medico[];
  selected;

  constructor (private medicoService : MedicoService) {}

  ngOnInit() {
    this.loadOptions();
  }

  ngOnChanges(changes : SimpleChanges) {
    if (changes.especialidade) {
      this.loadOptions();
    }
  }

  loadOptions() {
    if (this.especialidade) {
      this.medicoService.getByEspecialidade(this.especialidade).subscribe(
        data => {
          console.log("Medicos por especialidade: " + this.especialidade);
          console.log(data);
          this.medicos = data;
        },
        error => {
          console.log("Error Medico");
          console.log(error);
        }
      );
    }
  }

  getSelectedValue() {
    return this.selected;
  }
}
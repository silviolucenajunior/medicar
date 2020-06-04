import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AgendaService } from '../agenda.services';

@Component({
  selector: 'agenda-select',
  templateUrl: './select.component.html'
})
export class AgendaSelectComponent implements OnChanges, OnInit{
  @Input() especialidade;
  @Input() medico;
  agendas;
  agenda;
  horario;

  constructor (private agendaService : AgendaService) {}

  ngOnInit() {
    this.loadOptions();
  }

  ngOnChanges( changes : SimpleChanges) {
    if (changes.especialidade || changes.medico) {
      this.loadOptions();
    }
  }

  loadOptions() {
    if (this.especialidade && this.medico ) {
      this.agendaService.getByEspecialidadeAndMedico(this.especialidade, this.medico).subscribe(
        data => {
          this.agendas = data;
        },
        error => {
          console.log("ErRRORR");
          console.log(error);
        }
      );
    }
  }

  getAvailableHorarios() {
    if (this.agenda) {
      let agenda = this.agendas.find( agenda => { console.log(agenda.id + ' () ' + this.agenda); return agenda.id == this.agenda });

      return agenda ? agenda['horarios'] : [];
    }

    return [];
  }
}
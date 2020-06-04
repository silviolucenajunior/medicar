import { Component, ViewChild } from '@angular/core';
import { ConsultasService } from '../consulta.service';
import { EspecialidadeSelectComponent } from '../../especialidade/components/select.component';
import { MedicoSelectComponent } from '../../medico/components/select.component';
import { AgendaSelectComponent } from '../../agenda/components/select.component';
@Component({
  selector: 'cadastro-consulta',
  templateUrl: './cadastro.component.html'
})
export class CadastroConsultaComponent {
  @ViewChild('agenda') agendaSelect;

  constructor(private consultaService : ConsultasService) {}

  marcarConsulta() {
    let agenda_id = this.agendaSelect.getSelectedAgenda();
    let horario = this.agendaSelect.getSelectedHorario();
    this.consultaService.marcarConsulta(agenda_id, horario);
  }

}
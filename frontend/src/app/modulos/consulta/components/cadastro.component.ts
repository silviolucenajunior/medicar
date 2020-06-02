import { Component } from '@angular/core';
import { ConsultasService } from '../consulta.service';
@Component({
  selector: 'cadastro-consulta',
  templateUrl: './cadastro.component.html'
})
export class CadastroConsultaComponent {
  constructor(private consultaService : ConsultasService) {}

  save(consulta) {
    this.consultaService.insert(consulta);
  }
}
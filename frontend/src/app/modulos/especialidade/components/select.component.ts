import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../especialidade.services';

import { Especialidade } from '../types/especialidade';

@Component({
  selector: 'especialidade-select',
  templateUrl: './select.component.html'
})
export class EspecialidadeSelectComponent implements OnInit {
  especialidades : Especialidade[];
  selected = "";

  constructor (private especialidadeService : EspecialidadeService ) {}
  ngOnInit() {
    this.especialidadeService.getAll().subscribe(
      data => {
        console.log("Especialidades");
        console.log(data);
        this.especialidades = data;
      },
      error => {
        console.log("Error");
        console.log(error);
      }
    );
  }

  getSelectedValue() {
    return this.selected;
  }
}
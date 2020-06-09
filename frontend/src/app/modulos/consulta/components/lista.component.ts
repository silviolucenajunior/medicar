import { Component, OnInit } from '@angular/core';

import { ConsultasService } from '../consulta.service';

@Component({
  selector: 'consulta-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaConsultaComponent implements OnInit {
  items;

  constructor (private consultaService : ConsultasService ) {}

  ngOnInit() {
    this.consultaService.getAll().subscribe (
      response => {
        console.log("Sucesso nas consultas");
        this.items = response;
        console.log(response);
      },
      error => {
        console.log("Error");
      });
  }
}
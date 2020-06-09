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
    this.loadItems();
  }

  loadItems() {
    return this.consultaService.getAll().subscribe (
      response => {
        this.items = response;
      },
      error => {
        console.log("Error");
        console.log(error);
      }
    );
  }

  desmarcarConsulta(consultaId) {
    this.consultaService.delete(consultaId).subscribe(
      success => {
        this.loadItems();
      },
      error => {
        console.log("error");
        console.log(error);
      }
    );
  }

  reload() {

  }
}
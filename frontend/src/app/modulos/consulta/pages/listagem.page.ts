import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss']
})
export class ConsultaListagemPage {
  constructor (private router : Router ) {}

  novaConsulta() {
    this.router.navigate(['consultas/cadastro']);
  }
}
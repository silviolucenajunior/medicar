import { Component } from '@angular/core';

@Component({
  templateUrl: './listagem.page.html',
})
export class ConsultaListagemPage {
  novaConsulta() {
    console.log("Cadastrar Nova Consuta");
  }
}
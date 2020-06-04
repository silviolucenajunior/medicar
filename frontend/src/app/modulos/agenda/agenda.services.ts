import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agenda } from './types/agenda';

@Injectable()
export class AgendaService {
  private ENDPOINT = "http://127.0.0.1:8081/api/agenda";

  constructor (private http : HttpClient ) {}

  getByEspecialidadeAndMedico(especialidade, medico) {
    return this.http.get<Agenda[]>(this.ENDPOINT, {
      params: {
        'especialidade': especialidade,
        'medico': medico
      }
    });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medico } from './types/medico';

@Injectable()
export class MedicoService {
  private ENDPOINT = "http://127.0.0.1:8081/api/medico";
  
  constructor(private http : HttpClient) {}

  getByEspecialidade(especialidade:string) {
    return this.http.get<Medico[]>(this.ENDPOINT, {
      params: {
        'especialidade': especialidade
      }
    });
  }
}

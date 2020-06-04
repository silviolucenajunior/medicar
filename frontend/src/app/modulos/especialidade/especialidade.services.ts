import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Especialidade } from './types/especialidade';

@Injectable()
export class EspecialidadeService {
  private ENDPOINT = 'http://127.0.0.1:8081/api/especialidades';
  constructor (private http : HttpClient ) {}

  getAll() {
    return this.http.get<Especialidade[]>(this.ENDPOINT);
  }
}
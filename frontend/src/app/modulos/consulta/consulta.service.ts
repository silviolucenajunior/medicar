import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsultasService {
  private GETALL_ENDPOINT = "http://127.0.0.1:8081/api/consulta";
  private INSERT_ENDPOINT = "http://127.0.0.1:8081/api/consulta/";
  private DELETE_ENDPOINT = "http://127.0.0.1:8081/api/consulta/";

  constructor(private http : HttpClient) {}

  getAll() {
    return this.http.get(this.GETALL_ENDPOINT);
  }

  marcarConsulta(agenda_id, horario) {
    return this.http.post(this.INSERT_ENDPOINT, {
      'agenda' : agenda_id,
      'horario' : horario
    });
  }

  delete(consulta) {
    return this.http.delete(this.DELETE_ENDPOINT + consulta);
  }
}
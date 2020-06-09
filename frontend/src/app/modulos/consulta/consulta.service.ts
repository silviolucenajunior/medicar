import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsultasService {
  private GETALL_ENDPOINT = "http://127.0.0.1:8081/api/consulta";
  private INSERT_ENDPOINT = "http://127.0.0.1:8081/api/consulta/";
  private DELETE_ENDPOINT = "";

  constructor(private http : HttpClient) {}

  getAll() {
    return this.http.get(this.GETALL_ENDPOINT);
  }

  marcarConsulta(agenda_id, horario) {
    return this.http.post(this.INSERT_ENDPOINT, {
      'agenda' : agenda_id,
      'horario' : horario
    });
    // return this.http.post(this.INSERT_ENDPOINT,{
    //   'agenda' : agenda_id,
    //   'horario' : horario
    // }).subscribe( success => {
    //   console.log("BEA");
    // }, error => {
    //   console.log("Error");
    //   console.log(error);
    // });
  }

  delete(consulta) {
    this.http.delete(this.DELETE_ENDPOINT, consulta['id']);
  }
}
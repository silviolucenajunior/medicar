import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {
  private CADASTRO_ENDPOINT = '';

  constructor (private http : HttpClient) {}
  insert(usuario) {
    this.http.post(this.CADASTRO_ENDPOINT, usuario).subscribe( (data) => {
      console.log("Cadastro efetuado com sucesso");
      console.log(data);
    }, (err) => {
      console.log("Error no cadastro");
    });
  }

}
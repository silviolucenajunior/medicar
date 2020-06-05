import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {
  private CADASTRO_ENDPOINT = "http://127.0.0.1:8081/auth/users/";

  constructor (private http : HttpClient) {}
  insert(nome, email, senha) {
    let usuario = {
      'username' : email,
      'email' : email,
      'password' : senha,
      'first_name': nome.split(" ")[0],
      'last_name' : nome.split(" ").slice(1).join(" ")
    }
    this.http.post(this.CADASTRO_ENDPOINT, usuario).subscribe( (data) => {
      console.log("##############");
      console.log("Cadastro efetuado com sucesso");
      console.log(data);
    }, (err) => {
      console.log("Error no cadastro");
    });
  }

}
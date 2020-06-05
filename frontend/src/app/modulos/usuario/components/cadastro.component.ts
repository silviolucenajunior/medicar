import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.services';

@Component({
  selector: 'cadastro-usuario',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.scss']
})
export class CadastroUsuarioComponent {
  nome;
  email;
  senha;
  confirmarSenha;
  
  constructor( private usuarioService : UsuarioService ) {}

  cadastrarUsuario() {
    this.usuarioService.insert(this.nome, this.email, this.senha);
  }
}
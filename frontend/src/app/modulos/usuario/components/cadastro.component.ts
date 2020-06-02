import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.services';

@Component({
  selector: 'cadastro-usuario',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.scss']
})
export class CadastroUsuarioComponent {
  constructor( private usuarioService : UsuarioService ) {}

  register() {

  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenAuthService } from '../../auth/auth.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginUsuarioComponent {

  constructor( private authService : TokenAuthService, private router : Router) {}
  
  login(username, password) {
    this.authService.login(username, password).subscribe(
      success => {
        this.router.navigate(['consultas']);
      },
      error => {
        console.log("Error no Login");
        console.log(error);
      }
    );
  }
}
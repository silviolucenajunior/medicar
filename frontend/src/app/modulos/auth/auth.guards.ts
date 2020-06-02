import { Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenAuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService : TokenAuthService, private router : Router) {}

  canActivate () {
    if ( this.authService.isLoggedIn() ) {
      return true;
    }

    this.router.navigate(['login'])
    return false;
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenAuthService } from '../../auth/auth.service';

@Component({
  selector: 'top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent {
  constructor (private authService : TokenAuthService, private router : Router ) {}
  getLogedUsername() {
    return this.authService.getUserDisplay();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
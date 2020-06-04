import { Component } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent {
  getLogedUsername() {
    return "Lucas Pinto";
  }

  logout() {
    console.log("Sai");
  }
}
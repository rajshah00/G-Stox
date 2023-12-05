import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'G-Stox';
  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn')) {
      return true;
    } else {
      return false;
    }
  }
}

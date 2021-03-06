import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';

// Adding Routing module
import { Router} from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'My Routing App';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, private router:Router) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
    console.log('Log out');
  }
}

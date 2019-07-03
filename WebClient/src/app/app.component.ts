import { AuthService } from './services/auth.service';
import { SessionService } from './services/session.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Recipe Application';

  constructor(private sessionService: SessionService, private authService: AuthService) { }

  ngOnInit() {
    // application reloaded or user refreshed before logging out, persist user data to new instance of application
    if (!this.sessionService.getUser && this.sessionService.isAuthenticated) {
      this.authService.getUserData().subscribe(res => {
        this.sessionService.setUser(res.user as IUser);
      }, err => {
        console.error(`ERR GETTING USER FROM APP COMPONENT ONINIT METHOD: ${JSON.stringify(err)}`);
        this.sessionService.logout();
      });
    }
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../models/user.model';
import { TOASTR_TOKEN, Toastr } from '../shared/toastr.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo: IUser;
  message: string;

  constructor(
    private auth: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
    this.userInfo = {
      username: '',
      password: '',
      isAdmin: false,
      _id: 0
    };
  }

  login() {
    console.log('Loggin in..');
    this.auth.signIn(this.userInfo).subscribe(res => {
      let tempRes: any;
      tempRes = res;

      if (tempRes && tempRes.token) {
        // console.log('Response Token: ' + tempRes.token);
        localStorage.setItem('token', tempRes.token);
        // console.log('User: ' + JSON.stringify(tempRes.user));
        this.sessionService.setUser(tempRes.user as IUser);
        this.toastr.success('Successfully Logged In');
        this.router.navigate(['home']);
      }

    },
    err => {
      console.log('ERROR Obj: ' + JSON.stringify(err));
      console.log('\nERROR LOGGING IN: \n' + err.status);
      console.log('Error Message: ' + err.error.ErrMessage);
      this.message = err.error.ErrMessage;
    });
  }

  clearMessage(): void {
    this.message = '';
  }

}

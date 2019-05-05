import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../models/user.model';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
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
      password: ''
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
        if (tempRes.user.isAdmin) {
          // console.log('user logged in is an admin');
          this.sessionService.setAdminStatus();
        } else {
          console.log('user logged in is not an admin');
        }
        this.toastr.success('Successfully Logged In');
        this.router.navigate(['home']);
      }
      // console.log('Res received from node on login method call: ' + JSON.stringify(res));

    },
    err => {
      console.log('ERROR Obj: ' + JSON.stringify(err));
      console.log('\nERROR LOGGING IN: \n' + err.status);
      console.log('Error Message: ' + err.error.ErrMessage);
      this.message = err.error.ErrMessage;
    });
  }

}

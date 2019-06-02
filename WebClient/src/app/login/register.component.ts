import { Component, OnInit, Inject } from '@angular/core';
import { IUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userInfo: IUser;
  confirmPassword: string;
  passwordMessage: string;
  message: string;

  constructor(
    private auth: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router: Router) { }

  ngOnInit() {
    this.userInfo = {
      username: '',
      password:  '',
      isAdmin: false,
      _id: 0
    };
  }

  register() {
    if (this.userInfo.password !== this.confirmPassword) {
      this.passwordMessage = 'Passwords do not match.';
      return;
    } else {
      this.passwordMessage = '';
      console.log('UserInfo: ' + JSON.stringify(this.userInfo));
      this.auth.signUp(this.userInfo).subscribe(res => {
        let tempRes: any;
        tempRes = res;

        // console.log('Res received from node on signup method call: ' + JSON.stringify(res));

        if (!res) {
          console.log('Error creating new user');
        } else {
          this.toastr.success('Profile Successfully Created');
          localStorage.setItem('token', tempRes.token);
          this.router.navigate(['home']);
        }
      },
      err => {
        console.log('Err: ' + JSON.stringify(err));
        this.message = err.error.ErrMessage;
        this.toastr.error(err.error.ErrMessage);
      });
    }

  }

  clearMessage(): void {
    this.message = '';
    this.passwordMessage = '';
  }

}

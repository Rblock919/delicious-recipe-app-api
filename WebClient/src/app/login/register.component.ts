import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userInfo: IUser;
  username: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userInfo = {
      username: '',
      password:  ''
    };
  }

  register() {
    console.log('UserInfo: ' + JSON.stringify(this.userInfo));
    this.auth.testingSignUp(this.userInfo).subscribe(res => {
      console.log('Res received from node on signup method call: ' + res);
    });
  }

  login() {
    console.log('Loggin in..');
    this.auth.testingSignIn(this.userInfo).subscribe(res => {
      console.log('Res received from node on signup method call: ' + JSON.stringify(res));
    });
  }

}

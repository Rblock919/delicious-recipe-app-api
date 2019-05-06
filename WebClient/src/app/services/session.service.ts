import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private admin = false;
  userData: IUser;

  constructor(private auth: AuthService) {
    if (!this.userData && localStorage.getItem('token')) {
      console.log('NO USER DATA BUT TOKEN EXISTS');

      // for now until i can figure out how to persist data over refreshes, the best method is to just logout the user
      this.logout();
      // const userFill: IUser = {
      //   username: 'fill',
      //   password: 'fill',
      //   isAdmin: false
      // };
      // this.userData = userFill;
    }
   }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      return true;
    } else {
      return false;
    }
  }

  setUser(user: any) {
    const tempUser: IUser = {
      username: user.username,
      password: user.password,
      isAdmin: user.isAdmin
    };

    this.userData = tempUser;
    this.setAdminStatus(user.isAdmin);
  }

  get getUser(): IUser {
    return this.userData;
  }

  setAdminStatus(isAdmin: boolean): void {
    this.admin = isAdmin;
  }

  unsetAdminStatus(): void {
    this.admin = false;
  }

  get isAdmin() {
    if (this.userData) {
      return this.userData.isAdmin;
    } else {
      return this.admin;
    }
  }

  get token() {
    return localStorage.getItem('token');
  }

  get isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // checkAdminStatus() {
  //   // this.httpClient.post(`${this.uri}/getAdminStatus`, username).subscribe(res => {
  //   this.httpClient.post('http://localhost:3000/Auth/getAdminStatus', {token: this.token}).subscribe(res => {
  //     let tempRes: any;
  //     tempRes = res;
  //     if (tempRes.isAdmin === true) {
  //       console.log('user is admin');
  //       this.admin = true;
  //     } else {
  //       console.log('user is not admin');
  //       this.admin = false;
  //     }
  //   }, err => {
  //     console.log('Error: ' + JSON.stringify(err));
  //   });
  // }

}

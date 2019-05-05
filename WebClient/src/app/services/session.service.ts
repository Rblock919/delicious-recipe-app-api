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

  constructor(private httpClient: HttpClient) { }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      return true;
    } else {
      return false;
    }
  }

  setUser(user: IUser) {
    this.userData = user;
  }

  get getUser(): IUser {
    return this.userData;
  }

  setAdminStatus(): void {
    this.admin = true;
  }

  unsetAdminStatus(): void {
    this.admin = false;
  }

  get isAdmin() {
    return this.admin;
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

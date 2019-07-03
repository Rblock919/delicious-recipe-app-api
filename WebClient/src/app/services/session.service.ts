import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private admin = false;
  userData: IUser;

  constructor() { }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.userData = null;
      return true;
    } else {
      return false;
    }
  }

  setUser(user: IUser) {
    const tempUser: IUser = {
      username: user.username,
      password: user.password,
      isAdmin: user.isAdmin,
      _id: user._id
    };

    // this.userData = tempUser;
    this.userData = user;
    this.setAdminStatus(user.isAdmin);
  }

  get getUser(): IUser {
    return this.userData;
  }

  setAdminStatus(isAdmin: boolean): void {
    this.admin = isAdmin;
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

}

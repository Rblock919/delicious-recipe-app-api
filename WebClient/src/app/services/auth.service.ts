import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user.model';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { templateSourceUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:3000/Auth';
  testVar: any;

  constructor(private httpClient: HttpClient) { }

  signUp(newUser: IUser) {
    const options = { headers: new HttpHeaders( { 'Content-Type': '/application/json'} )};
    return this.httpClient.post(`${this.uri}/signUp`, newUser);
    // .pipe(catchError(this.handleError('signUp')));
  }

  signIn(userInfo: IUser) {
    return this.httpClient.post(`${this.uri}/signIn`, userInfo);
    // .pipe(catchError(this.handleError('signIn')));
  }

  getUserData() {
    return this.httpClient.get(`${this.uri}/getUserData`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

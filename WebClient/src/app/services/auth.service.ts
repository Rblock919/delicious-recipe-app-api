import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user.model';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'localhost:3000';
  testVar: any;

  constructor(private httpClient: HttpClient) { }

  testingSignUp(newUser: IUser) {
    const options = { headers: new HttpHeaders( { 'Content-Type': '/application/json'} )};
    return this.httpClient.post('http://localhost:3000/Auth/signUp', newUser)
    .pipe(catchError(this.handleError('signUp')));
  }

  testingSignIn(userInfo: IUser) {
    return this.httpClient.post('http://localhost:3000/Auth/signIn', userInfo)
    .pipe(catchError(this.handleError('signIn')));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

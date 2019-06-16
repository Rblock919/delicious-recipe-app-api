import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private uri = 'http://localhost:3000/Admin';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]>  {
    return this.httpClient.get<IUser[]>(`${this.uri}/getUsers`);
  }

  updateUsers(users: IUser[]): Observable<any> {
    return this.httpClient.post(`${this.uri}/updateUsers`, users, {responseType: 'text'});
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';
import { IRecipe } from '../models/recipe.model';

@Injectable(
  // { providedIn: 'root' }
  )
export class AdminService {
  private uri = 'http://localhost:3000/api/admin';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]>  {
    return this.httpClient.get<IUser[]>(`${this.uri}/getUsers`, {responseType: 'json'});
  }

  updateUsers(users: IUser[]): Observable<any> {
    return this.httpClient.post(`${this.uri}/updateUsers`, users, {responseType: 'text'});
  }

  getApprovalList(): Observable<IRecipe[]> {
    return this.httpClient.get<IRecipe[]>(`${this.uri}/approval`, {responseType: 'json'});
  }

  getApprovalById(id: number): Observable<IRecipe> {
    return this.httpClient.get<IRecipe>(`${this.uri}/approval/${id}`, {responseType: 'json'});
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  uri = 'localhost:3000';
  testVar: any;

  constructor(private httpClient: HttpClient) { }

  testingApiService() {
    this.httpClient.get('http://localhost:3000/testing').subscribe((data) => {
      console.log(data);
    });

  }

}

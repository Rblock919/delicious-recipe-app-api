import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  newRecipes = [
    { title: 'New Recipe 1', producer: 'Hello Fresh', cookTime: '30'},
    { title: 'New Recipe 2', producer: 'Blue Apron', cookTime: '40'},
    { title: 'New Recipe 3', producer: 'Home Chef', cookTime: '50'}


  ];

  constructor() { }

  ngOnInit() {
  }

}

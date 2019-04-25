import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  newRecipes = [
    { title: 'New Recipe 1', producer: 'Hello Fresh', cookTime: '30'},
    { title: 'New Recipe 2', producer: 'Blue Apron', cookTime: '40'},
    { title: 'New Recipe 3', producer: 'Home Chef', cookTime: '50'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

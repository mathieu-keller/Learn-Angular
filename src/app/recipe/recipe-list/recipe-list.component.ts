import { Component } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  private _recipes: Recipe[] = [
    {name: '博多ラーメン', description: 'Famous Hakata Ramen only here!', imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfEJVNbVVOAyK1neKpmBiCy4vCOMK1kZ5JFW_T5Gz7Q&s'}
  ];


  get recipes(): Recipe[] {
    return this._recipes;
  }

  set recipes(value: Recipe[]) {
    this._recipes = value;
  }
}

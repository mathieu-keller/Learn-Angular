import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  private _ingredients: Ingredient[] = [
    {name: '出し', amount: 5},
    {name: '玉ねぎ', amount: 2}
  ];

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }
}

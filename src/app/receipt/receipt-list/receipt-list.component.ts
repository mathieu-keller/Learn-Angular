import { Component } from '@angular/core';
import {Receipt} from "../receipt";

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrl: './receipt-list.component.css'
})
export class ReceiptListComponent {
  private _recipes: Receipt[] = [
    {name: '博多ラーメン', description: 'Famous Hakata Ramen only here!', imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfEJVNbVVOAyK1neKpmBiCy4vCOMK1kZ5JFW_T5Gz7Q&s'}
  ];


  get recipes(): Receipt[] {
    return this._recipes;
  }

  set recipes(value: Receipt[]) {
    this._recipes = value;
  }
}

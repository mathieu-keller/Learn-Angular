import {Component} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {

  private _userName = '';

  get userName(): string {
    return this._userName;
  }


  set userName(value: string) {
    this._userName = value;
  }

  onReset() {
    this._userName = '';
  }


}

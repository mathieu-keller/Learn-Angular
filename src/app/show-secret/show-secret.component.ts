import {Component} from '@angular/core';

@Component({
  selector: 'app-show-secret',
  templateUrl: './show-secret.component.html',
  styleUrl: './show-secret.component.css'
})
export class ShowSecretComponent {
  private _isVisable = false;
  private _logs: { readonly timestamp: Date }[] = [];

  get isVisable(): boolean {
    return this._isVisable;
  }

  set isVisable(value: boolean) {
    this._logs.push({timestamp: new Date()})
    this._isVisable = value;
  }

  get logs(): { readonly timestamp: Date }[] {
    return this._logs;
  }
}

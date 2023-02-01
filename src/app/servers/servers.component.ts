import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  private _allowNewServer = false;
  private _serverCreationStatus = 'No server was created!';

  private _serverName = 'test server';

  get serverCreationStatus(): string {
    return this._serverCreationStatus;
  }


  get allowNewServer(): boolean {
    return this._allowNewServer;
  }


  get serverName(): string {
    return this._serverName;
  }


  set serverName(value: string) {
    this._serverName = value;
  }

  onServerCreation() {
    this._serverCreationStatus = `server was created! Name is ${this.serverName}`;
  }

  constructor() {
    setTimeout(() => this._allowNewServer = !this._allowNewServer, 2000)
  }


}

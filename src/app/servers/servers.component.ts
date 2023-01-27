import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  private _allowNewServer = false;
  private _serverCreationStatus = 'No server was created!';

  private _serverName = '';

  get serverCreationStatus(): string {
    return this._serverCreationStatus;
  }


  get allowNewServer(): boolean {
    return this._allowNewServer;
  }


  get serverName(): string {
    return this._serverName;
  }

  onUpdateServerName(e: Event) {
    this._serverName = (<HTMLInputElement>e.target).value;
 }

  onServerCreation() {
    this._serverCreationStatus = 'server was created!';
  }

  constructor() {
    setInterval(() => this._allowNewServer = !this._allowNewServer, 2000)
  }


}

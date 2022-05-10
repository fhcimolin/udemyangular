import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created'
  serverName = 'testServer';
  serverCreated = false;
  servers = ['Testserver','Testserver2'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = '';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  isServerNameFormFilled(){
    return !!this.serverName;
  }
}
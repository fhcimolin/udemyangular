import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline'; //optional typing

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.getServerStatus() === 'online' ? 'green' : 'red'
    }
}
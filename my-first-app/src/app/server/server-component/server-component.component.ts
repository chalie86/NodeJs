import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  serverid: number = 10;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

}

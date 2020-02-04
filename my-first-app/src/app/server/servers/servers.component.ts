import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: `<app-server-component><app-server-component><app-server-component><app-server-component>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allownewServer: boolean = false;
   serverCreationStatus = 'No server was created';
  constructor() { 
    setTimeout(() => {
      this.allownewServer = true;
    },2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created';
  }

}

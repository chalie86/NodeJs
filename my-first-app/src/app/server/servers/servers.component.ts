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
   Servename = 'TestServer';
   ServerCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allownewServer = true;
    },2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.ServerCreated = true;
    this.serverCreationStatus = 'server was created ' + this.Servename;
  }

  onUpdateServename(event: Event){
    this.Servename = (<HTMLInputElement>event.target).value;

  }

}

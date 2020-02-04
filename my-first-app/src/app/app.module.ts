import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponentComponent } from './server/server-component/server-component.component';
import { ServersComponent } from './server/servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponentComponent,
    ServersComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

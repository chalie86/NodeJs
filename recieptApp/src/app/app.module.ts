import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceipeListComponent } from './receipt/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipt/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipt/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceiptComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShopingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

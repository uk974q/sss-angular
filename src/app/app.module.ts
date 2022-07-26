import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

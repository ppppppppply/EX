import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MessageComponent } from './components/message/message.component';
import { RouterOutlet } from '@angular/router';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
// import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MessageComponent,
    HomeDetailComponent,
    HomeComponent,
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterOutlet
],
})
export class AppModule { }

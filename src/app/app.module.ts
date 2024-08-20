import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeDetailComponent } from './home-detail/home-detail.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeDetailComponent,
    HomeComponent,
    CommonModule,
    FormsModule,
    BrowserModule
],
})
export class AppModule { }

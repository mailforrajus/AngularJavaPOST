import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  HttpClientModule } from "@angular/common/http";
import {  studentCService } from "./services/student.service";
import {  studentComponent } from "./components/student.component";
import {  FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent, studentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [studentCService],
  bootstrap: [studentComponent]
})
export class AppModule { }

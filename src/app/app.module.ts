import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { Day1Component } from './components/day1/day1.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home/home.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

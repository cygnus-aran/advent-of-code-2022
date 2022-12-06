import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { Day1Component } from './components/day1/day1.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home/home.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { Day2Component } from './components/day2/day2.component';
import { Day3Component } from './components/day3/day3.component';
import { Day4Component } from './components/day4/day4.component';
import { Day5Component } from './components/day5/day5.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    HomeComponent,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component
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

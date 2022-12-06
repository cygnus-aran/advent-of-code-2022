import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Day1Component} from "./components/day1/day1.component";
import {HomeComponent} from "./components/home/home/home.component";
import {Day2Component} from "./components/day2/day2.component";
import {Day3Component} from "./components/day3/day3.component";
import {Day4Component} from "./components/day4/day4.component";
import {Day5Component} from "./components/day5/day5.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'day1', component: Day1Component},
  { path: 'day2', component: Day2Component},
  { path: 'day3', component: Day3Component},
  { path: 'day4', component: Day4Component},
  { path: 'day5', component: Day5Component},
  { path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

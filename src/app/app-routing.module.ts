import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Day1Component} from "./components/day1/day1.component";
import {HomeComponent} from "./components/home/home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'day1', component: Day1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

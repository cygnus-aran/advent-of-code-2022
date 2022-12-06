import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  input: string = '';
  splits: string[] = [];
  alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  sum = 0;
  sum2 = 0;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.loadInput('day3_input').subscribe( {
      next: value => {
        this.input = value;
      },
      error: err => {},
      complete: () => {
        this.splits = this.input.trim().split(/\n?\r/g);
      }
    })
  }

  return() {
    this.router.navigate(['home']);
  }

  showMe() {
    this.sum = 0;
    this.sum2 = 0;
    let pair = {h1: '', h2: ''}
    let triplet = {h1: '', h2: '', h3: ''}

    for (let i = 0; i< this.splits.length; i++) {
      let split = this.splits[i].trim();
      pair.h1 = split.substring(0, (split.length/2));
      pair.h2 = split.substring((split.length/2), split.length);
      let rail = pair.h1.split("")
      for (const l of rail) {
        if (pair.h2.includes(l)) {
          this.sum += this.alpha.indexOf(l)+1;
          break;
        }
      }
      if((i + 1) % 3 == 0){
        triplet.h1 = split
        triplet.h2 = this.splits[i - 1].trim();
        triplet.h3 = this.splits[i - 2].trim();
        let rail2 = triplet.h1.split("")
        for (const l of rail2) {
          if (triplet.h2.includes(l) && triplet.h3.includes(l)) {
            this.sum2 += this.alpha.indexOf(l)+1;
            break;
          }
        }
      }
    }
  }


}

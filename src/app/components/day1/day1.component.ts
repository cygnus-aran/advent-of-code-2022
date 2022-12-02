import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
  input: string = '';
  cals: string[] = [];
  max: number[] = [0,0,0];
  sum: number = 0;
  elf: number = 0;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.loadInput('day1_input1').subscribe( {
      next: value => {
        this.input = value;
      },
      error: err => {},
      complete: () => {
        this.splitCalories();
      }
    })
  }

  splitCalories() {
    this.cals = this.input.trim().split(/\n?\r/g);
  }

  showInput() {
    for (const line of this.cals) {
      if(line == "") {
        if(this.sum > this.max[0]) {
          this.max[1] = this.max[0];
          this.max[0] = this.sum;
        } else if (this.sum > this.max[1]) {
          this.max[2] = this.max[1];
          this.max[1] = this.sum;
        } else if (this.sum > this.max[2]) {
          this.max[2] = this.sum;
        }
        this.sum = 0;
      } else {
        this.sum += Number(line);
      }
    }
  }

  return() {
    this.router.navigate(['home']);
  }
}

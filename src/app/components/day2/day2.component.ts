import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {
  input: string = '';
  inputO: string = '';
  pairs: string[] = [];
  score: number = 0;
  score2: number = 0;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.loadInput('day2_input').subscribe({
      next: value => {
        this.input = value;
      }, error: err => {},
      complete: () => {
        this.inputO = this.input.replaceAll(/[AX]/g, '1');
        this.inputO = this.inputO.replaceAll(/[BY]/g, '2');
        this.inputO = this.inputO.replaceAll(/[CZ]/g, '3');
        this.pairs = this.inputO.trim().split(/\n?\r/g);
      }
    });
  }

  return() {
    this.router.navigate(['home']);
  }

  calculateScore1() {
    this.score = 0;
    for (const pair of this.pairs) {
      if ((pair.trim().charAt(2) == '1' && pair.trim().charAt(0) == '2') ||
        (pair.trim().charAt(2) == '2' && pair.trim().charAt(0) == '3') ||
        (pair.trim().charAt(2) == '3' && pair.trim().charAt(0) == '1')) {
        this.score += Number(pair.trim().charAt(2));
      } else if (pair.trim().charAt(0) == pair.trim().charAt(2)) {
        this.score += (3 + Number(pair.trim().charAt(2)));
      } else {
        this.score += (6 + Number(pair.trim().charAt(2)));
      }
    }
  }

  calculateScore2() {
    this.score2 = 0;
    for (const pair of this.pairs) {
      if(pair.trim().charAt(2) == '1') {
        if(pair.trim().charAt(0) == '1') {
          this.score2 += 3;
        } else if(pair.trim().charAt(0) == '2') {
          this.score2 += 1;
        } else {
          this.score2 += 2;
        }
      } else if (pair.trim().charAt(2) == '2') {
        this.score2 += 3 + Number(pair.trim().charAt(0));
      } else {
        if(pair.trim().charAt(0) == '1') {
          this.score2 += 8;
        } else if(pair.trim().charAt(0) == '2') {
          this.score2 += 9;
        } else {
          this.score2 += 7;
        }
      }
    }
  }
}

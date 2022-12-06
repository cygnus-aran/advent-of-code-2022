import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  input: string = '';
  pairs: string[] = [];
  contained: number = 0;
  overlap: number = 0;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.loadInput('day4_input').subscribe( {
      next: value => {
        this.input = value;
      },
      error: err => {},
      complete: () => {
        this.pairs = this.input.trim().split(/\n?\r/g);
      }
    })
  }


  return() {
    this.router.navigate(['home']);
  }

  showMe() {
    this.contained = 0;
    for (const single of this.pairs) {
      let split = single.trim();
      let pair1 = {n1: 0, n2: 0};
      let pair2 = {n1: 0, n2: 0};
      pair1.n1 = Number(split.substring(0, split.indexOf('-')));
      split = split.replace('-',' ');
      pair1.n2 = Number(split.substring(split.indexOf(',') + 1, split.indexOf('-')));
      pair2.n1 = Number(split.substring(split.indexOf(' ') + 1 , split.indexOf(',')));
      pair2.n2 = Number(split.substring(split.indexOf('-') + 1, split.length));
      if(pair1.n1 > pair1.n2 && pair2.n1 < pair2.n2) {
        this.contained++;
        this.overlap++;
      } else if (pair1.n1 < pair1.n2 && pair2.n1 > pair2.n2) {
        this.contained++;
        this.overlap++;
      } else if (pair1.n1 == pair1.n2 || pair2.n1 == pair2.n2){
        this.contained++;
        this.overlap++;
      } else if((pair1.n1> pair1.n2 && pair1.n1>pair2.n2) || (pair2.n1 < pair1.n2 && pair2.n1 < pair2.n2)){

      } else {
        this.overlap++;
      }
    }
  }
}

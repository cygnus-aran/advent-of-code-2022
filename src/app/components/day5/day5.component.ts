import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  input: string = '';
  rows: string[] = [];
  stacks: string[] = [];
  row: string[] = [];
  columns: number = 0;
  matrix: string[][] = [[]];
  matrix2: string[][] = [[]];
  instructions: string[] = [];
  topOfEach: string = '--';
  topOfEach9001: string = '--';


  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.loadInput('day5_input').subscribe( {
      next: value => {
        this.input = value;
      },
      error: err => {},
      complete: () => {
        this.rows = this.input.split(/\n?\r/g);
        for (let i = 0; i < 9; i++) {
          this.row = this.rows[i].replaceAll('[','.')
            .replaceAll(']', '.')
            .replaceAll(' ', '.')
            .replaceAll('\n', '')
            .split('');
          for (let x = this.row.length; x < 35; x++) {
            if(this.row.length < 35) {
              this.row.push(".");
            }
          }
          if(i == 8) {
            this.columns = Number(this.row[this.row.length - 2]);
          }
          let col = '';
          let counter = 2;
          for (const element of this.row) {
            if (counter == 3) {
              counter = 0;
              col = col.concat(element);
            } else {
              counter++;
            }
          }
          this.stacks.push(col);
        }
        for (let i = 0; i < this.columns; i++) {
          let actualRow: string[] = [];
          for (let j = 0; j < this.stacks[i].length-1; j++) {
            if(this.stacks[j].substring(i, this.stacks[j].length - (this.stacks[j].length - (i + 1))) != '.')
              actualRow.push(this.stacks[j].substring(i, this.stacks[j].length - (this.stacks[j].length - (i + 1))));
          }
          this.matrix.push(actualRow);
          this.matrix2.push([...actualRow]);
        }
      }
    })
  }

  return() {
    this.router.navigate(['home']);
  }

  showMe() {
    this.instructions = this.input.trim().split(/\n?\r/g);
    this.instructions = this.instructions.slice(this.columns + 1);
    for (const ins of this.instructions) {
      let quantity = 0;
      let origin = 0;
      let destination = 0;
      quantity = Number(ins.split(' ', 2)[1]);
      origin = Number(ins.split(' ', 4)[3]);
      destination = Number(ins.split(' ', 6)[5]);
      for (let i = 0; i < quantity; i++) {
        let aux = this.matrix[origin].splice(0, 1);
        this.matrix[destination].splice(0, 0, aux.toString())
      }
      let aux2 = this.matrix2[origin].splice(0,quantity);
      this.matrix2[destination] = [...aux2, ...this.matrix2[destination] ];
    }
    this.matrix2.splice(0,1);
    this.matrix.splice(0,1);
    for (const col of this.matrix) {
      this.topOfEach = this.topOfEach.concat(col[0]);
    }
    for (const col1 of this.matrix2) {
      this.topOfEach9001 = this.topOfEach9001.concat(col1[0]);
    }
  }
}

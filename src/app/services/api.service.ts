import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }
  INPUT_URL = '/../assets/inputs/';
  loadInput(day: string) {
    return this.http.get(this.INPUT_URL + day + '.txt', {responseType: "text"});
  }
}

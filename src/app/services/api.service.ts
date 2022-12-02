import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }

  INPUT_URL = environment.assets_url + 'assets/inputs/';
  loadInput(day: string) {
    return this.http.get(this.INPUT_URL + day + '.txt', {responseType: "text"});
  }
}

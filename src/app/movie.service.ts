import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "./movie";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  apiKey = '4e039b4ce58370b07f5af5036fee8c65';
  constructor(private http: HttpClient) { }

  findAllMovies() {
    return this.http.get(this.baseUrl + 'now_playing?api_key=' + this.apiKey);
  }

  getOneMovie(id: number) {
    return this.http.get(this.baseUrl + id + '?api_key=' + this.apiKey);
  }
}

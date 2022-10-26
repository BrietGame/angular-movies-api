import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie = new Movie(0, '', '', '', 0, '', '');
  // @ts-ignore
  private routeSub: Subscription;
  constructor(private movieS: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.movieS.getOneMovie(params['id']).subscribe((data:any) => {
        this.movie = data;
        console.log(this.movie);
      })
    })
  }

}

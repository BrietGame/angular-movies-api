import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movie: Movie = new Movie(0, '', '', '', 0, '', '');
  listMovies: any;
  newTerm: Object = { term: ''};
  term: string = '';

  constructor(private movieS: MovieService) { }

  ngOnInit(): void {

    this.movieS.findAllMovies().subscribe((data:any) => {
      this.listMovies = data.results
      // INFO: Trier par date
      // this.listMovies = this.listMovies.sort((a:any,b:any) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
    });
  }

  changeTerm(){
    // @ts-ignore
    this.term = document.getElementById('search_input').value;
    if (this.term != '') {
      // INFO : Filtrer par date
      this.listMovies = this.listMovies.filter((e:any) => e.original_title == this.term);
    } else {
      this.ngOnInit();
    }
    console.log(this.term);
  }

}

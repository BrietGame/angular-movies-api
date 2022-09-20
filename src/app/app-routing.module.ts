import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from "./movie/movie.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'movies',
    component: HomeComponent,
  },
  {
    path: 'movies/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

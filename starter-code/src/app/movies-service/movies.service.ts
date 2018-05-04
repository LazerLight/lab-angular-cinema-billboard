import { Injectable } from '@angular/core';
import { Movie, MoviesCollection } from './sample-movies';

@Injectable()
export class MoviesService {
  
  movies: Array<Movie> = MoviesCollection;
  
  constructor() { }
  
  
  getMovies(){
    return this.movies;
  }

  getMovie(id:number){
    let singleMovie;

    return this.movies.find(singleMovie=> singleMovie.id === id)
  }
  
}

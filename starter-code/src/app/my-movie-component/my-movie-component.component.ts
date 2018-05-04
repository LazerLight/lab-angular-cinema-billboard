import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MoviesCollection } from '../movies-service/sample-movies';
import { MoviesService } from '../movies-service/movies.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  
  movieId: string;
  movieInfo: Movie;
  movies: Array<Movie> = MoviesCollection;

  constructor(
    private request: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this.request.paramMap
    .subscribe((myParams) => {
      this.movieId = myParams.get('blahId');
      this.getMovie()
    });
  }
  
  getMovie(){
    this.movieInfo = MoviesCollection.find(singleMovie=> singleMovie.id == this.movieId)
  }
}
  
   // Pro way
   // this.contactInfo =
   //   contactList.find(contact => contact.id === this.contactId);
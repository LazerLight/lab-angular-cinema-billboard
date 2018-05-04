import { Component, OnInit } from '@angular/core';
import { Movie, MoviesCollection } from '../movies-service/sample-movies';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  movies: Array<Movie> = MoviesCollection;

  constructor() { }

  ngOnInit() {
  }

}

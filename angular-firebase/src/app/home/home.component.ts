import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any = {}

  constructor(private service: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllMovies().subscribe(movies => {
      this.movies = movies
    })
  }

  displayDetails(movie: any) {
    this.router.navigate(['/details', movie])
  }

  deleteMovie(i: number) {
    console.log("INDEX " + i)
    this.service.getAllMovies().subscribe(movies => {
      movies.splice(i, 1)
      
    })
  }
}

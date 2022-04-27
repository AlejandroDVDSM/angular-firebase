import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = []
  constructor(private service: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies()
  }

  displayDetails(movie: any) {
    this.router.navigate(['/details', movie])
  }

  getMovies() {
    this.service.getMovies().subscribe(movies => {
      this.movies = []
      movies.forEach((element: any) => {
        this.movies.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
      console.log(this.movies)
    })
  }

  deleteMovie(id: string) {
    this.service.deleteMovie(id).then(() => {

    }).catch(error => {
      console.log(error)
    })
  }
}

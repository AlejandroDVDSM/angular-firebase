import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  movieName: string | undefined
  movieRelease: string | undefined
  movieRunningTime: string | undefined
  movieDirector: string | undefined
  movieScriptwriter: string | undefined
  movieIMDBRating: number | undefined
  movieMetascoreRating: number | undefined
  movieNotes: string = ""

  constructor(private service: MoviesService) { }

  ngOnInit(): void { }

  addMovie():void {
    if((this.movieName != undefined || "") && (this.movieRelease != undefined || "") && (this.movieRunningTime != undefined || "")  && (this.movieDirector != undefined || "") && (this.movieScriptwriter != undefined || "") && (this.movieIMDBRating != undefined) && (this.movieMetascoreRating != undefined)) {
      let newMovie = {
        name: this.movieName,
        release: this.movieRelease,
        runningTime: this.movieRunningTime,
        director: this.movieDirector, 
        scriptwriter: this.movieScriptwriter, 
        imdbRating: this.movieIMDBRating, 
        metascoreRating: this.movieMetascoreRating, 
        notes: this.movieNotes
      }
        this.service.addMovie(newMovie)
    }
  }
}

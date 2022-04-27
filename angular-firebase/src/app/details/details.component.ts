import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieID: string = ""
  movieName: string | undefined
  movieRelease: string | undefined
  movieRunningTime: string | undefined
  movieDirector: string | undefined
  movieScriptwriter: string | undefined
  movieIMDBRating: string | undefined
  movieMetascoreRating: string | undefined
  movieNotes: string = ""

  newNotes: string = ""

  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
    this.movieID = this.route.snapshot.params['id']
    this.movieName = this.route.snapshot.params['name']
    this.movieRelease = this.route.snapshot.params['release']
    this.movieRunningTime = this.route.snapshot.params['runningTime']
    this.movieDirector = this.route.snapshot.params['director']
    this.movieScriptwriter = this.route.snapshot.params['scriptwriter']
    this.movieIMDBRating = this.route.snapshot.params['imdbRating']
    this.movieMetascoreRating = this.route.snapshot.params['metascoreRating']
    this.movieNotes = this.route.snapshot.params['notes']
  }

  editNotes(): void {
    this.service.editNotes(this.movieID, this.newNotes)
    this.movieNotes += this.newNotes
  }
  
}

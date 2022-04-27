import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

/*interface Movie {
  id: string
  name: string | undefined
  release: string | undefined
  runningTime: string | undefined
  director: string | undefined
  scriptwriter: string | undefined
  imdbRating: number | undefined
  metascoreRating: number | undefined
  notes: string | undefined
}*/

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private firestore: AngularFirestore) { }

    getMovies(): Observable<any> {
      return this.firestore.collection('movies').snapshotChanges();
    }

    addMovie(movie: any) {
      return this.firestore.collection('movies').add(movie)
    }

    deleteMovie(id: string): Promise<any> {
      return this.firestore.collection('movies').doc(id).delete();
    }

    editNotes(id: string, data: string) {
      return this.firestore.collection('movies').doc(id).update({notes: data})
    }

  /*MOVIES: Movie[] = [
    {id: uuidv4(), name: 'The Pianist', 
    release: '2002', runningTime: '2h 30min', 
    director: 'Roman Polanski', scriptwriter: 'Ronald Harwood', 
    imdbRating: 8.6, metascoreRating: 85, 
    notes: "Notice how director of photography Pawel Edelman slowly drains the color out of all the scenes as the film progresses to signify the deterioration of the city and of Szpilman himself."},

    {id: uuidv4(), name: 'Memento', 
    release: '2000', runningTime: '1h 53min', 
    director: 'Christopher Nolan', scriptwriter: 'Christopher Nolan', 
    imdbRating: 8.0, metascoreRating: 80, 
    notes: "The medical condition experienced by Leonard in this film is a real condition called anterograde amnesia, the inability to form new memories after damage to the hippocampus. During the 1950s, doctors treated some forms of epilepsy by removing parts of the Hippocampus, resulting in the same memory problems."},

    {id: uuidv4(), name: 'Goodfellas', 
    release: '1990', runningTime: '2h 26min', 
    director: 'Martin Scorcese', scriptwriter: 'Nicholas Pileggi', 
    imdbRating: 8.7, metascoreRating: 90, 
    notes: "Robert De Niro wanted to use real money for the scene where Jimmy hands out money, because he didn't like the way fake money felt in his hands. The prop master gave De Niro $5,000 of his own money. At the end of each take, no one was allowed to leave the set until all the money was returned and counted. Also, according to Nicholas Pileggi, some mobsters were hired as extras to lend authenticity to scenes. The mobsters gave Warner Bros. fake Social Security numbers, and no one knows how they received their paychecks."},

    {id: uuidv4(), name: 'Shutter Island', 
    release: '2010', runningTime: '2h 18min', 
    director: 'Martin Scorcese', scriptwriter: 'Laeta Kalogridis', 
    imdbRating: 8.2, metascoreRating: 63, 
    notes: "Seriously, watch this movie"},

    {id: uuidv4(), name: 'Get Out', 
    release: '2017', runningTime: '1h 44min', 
    director: 'Jordan Pelee', scriptwriter: 'Jordan Pelee', 
    imdbRating: 7.7, metascoreRating: 85, 
    notes: "Due to the success of this film, Jordan Peele became the first African-American writer, producer, and director to earn more than $100 million in a debut film."},

    {id: uuidv4(), name: 'The Road', 
    release: '2009', runningTime: '1h 51min', 
    director: 'John Hillcoat', scriptwriter: 'Joe Penhall', 
    imdbRating: 7.2, metascoreRating: 64, 
    notes: "Viggo Mortensen nearly turned down the role of Man, because he had planned a break from film work. After completing his work as Man, Mortensen took roughly two years off from acting."},

    {id: uuidv4(), name: 'Prisoners', 
    release: '2013', runningTime: '2h 33min', 
    director: 'Denis Villeneuve', scriptwriter: 'Aaron Guzikowski', 
    imdbRating: 8.1, metascoreRating: 70, 
    notes: "At some point, Paul Dano's character sings: \"Jingle Bells, Batman smells, Robin laid an egg...\" just before Hugh Jackman's character captures him. Nine years later, Paul Dano will play The Riddler in The Batman (2022)."},

    {id: uuidv4(), name: 'Children of Man', 
    release: '2006', runningTime: '1h 49min', 
    director: 'Alfonso Cuarón', scriptwriter: 'Alfonso Cuarón, Timothy J. Sexton, David Arata', imdbRating: 7.9, metascoreRating: 84, 
    notes: "In the movie, the infertility crisis is the result of all women being infertile. In the original novel by P.D. James, it's the result of all men producing no sperm."},

    {id: uuidv4(), name: 'Alien', 
    release: '1979', runningTime: '1h 57min', 
    director: 'Ridley Scott', scriptwriter: "Dan O'Bannon", 
    imdbRating: 8.5, metascoreRating: 89, 
    notes: "Sir Ridley Scott stated that in casting the role of Ripley, it ultimately came down to Sigourney Weaver and Meryl Streep. The two actresses had been college mates at Yale. Ultimately, Weaver was offered the job because Streep was mourning the death of her partner John Cazale at the time of casting."},

    {id: uuidv4(), name: 'Parasite', 
    release: '2019', runningTime: '2h 12min', 
    director: 'Bong Joon Ho', scriptwriter: "Han Jin-won", 
    imdbRating: 8.5, metascoreRating: 96, 
    notes: "The house was designed to feature lines that clearly divide the Parks and Kims."}

  ]

  getAllMovies(): Observable<Movie[]> {
    const movies = of(this.MOVIES)
    return movies
  }

  getMovie(id: string): Observable<Movie> {
    const movie = this.MOVIES.find(m => m.id == id)!
    return of(movie)
  }*/
}

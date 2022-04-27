import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private firestore: AngularFirestore) { }

  getMovies(): Observable<any> {
    return this.firestore.collection('movies').snapshotChanges();
  }
  
  addMovie(movie: any) {
    return this.firestore.collection('movies').add(movie);
  }
  
  deleteMovie(id: string) {
    return this.firestore.collection('movies').doc(id).delete();
  }
  
  editNotes(id: string, data: string) {
    return this.firestore.collection('movies').doc(id).update({notes: data});
  }
}

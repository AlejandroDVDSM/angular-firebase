import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'details/:movie', component: DetailsComponent},
  { path: 'newMovie', component: NewMovieComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
                                  DetailsComponent,
                                  NewMovieComponent,
                                  PagenotfoundComponent]

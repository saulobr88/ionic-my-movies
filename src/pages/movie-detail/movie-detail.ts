import { Component, OnDestroy } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Rx';

import { MovieProvider } from './../../providers/movie/movie';
import { Movie } from './../../interfaces/movie';

@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage implements OnDestroy {

  movie:Movie;
  private movieSub: Subscription;

  constructor(
    private navParams: NavParams,
    private movieProvider:MovieProvider
  ) {}

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    this.movieSub = this.movieProvider.getMovieDetails(id)
    .subscribe(movie => {this.movie = movie; console.log("Movie: ", this.movie);} );
  }

  videoResults(movie){
    if (movie.videos.results.length > 0){
      return true;
    }
    return false;
  }

  public ngOnDestroy(): void {
    if(this.movieSub){
      this.movieSub.unsubscribe();
    }
}
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MovieDetailPage } from '../movie-detail/movie-detail';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  public movies = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {} // end of constructor

  ionViewDidLoad() {
    this.http.get('http://www.omdbapi.com/?apikey=BanMePlz&s=batman')
        .toPromise().then((response) => {
          this.movies = response.json().Search; // o array de filmes
        });
  }

  goToMovieDetail(movie){
    this.navCtrl.push(MovieDetailPage, {imdbID: movie.imdbID});
  }

  /* For tests only */
  pushTwoMovies(){

    this.movies.push({
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"
    });

    this.movies.push({
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    });
  } // end pushTwoMovies

}

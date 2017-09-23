import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  public movie = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  ionViewDidLoad() {
    //http://www.omdbapi.com/?apikey=BanMePlz&i=tt1569923
    let url = "http://www.omdbapi.com/?apikey=BanMePlz&i="+this.navParams.get('imdbID');
    this.http.get(url)
        .toPromise().then((response) => {
          this.movie = response.json();
        });
  }

}

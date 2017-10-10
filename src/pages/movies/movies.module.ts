import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { APP_CONFIG, APP_DI_CONFIG } from '../../providers/config/config';
import { MovieProvider } from './../../providers/movie/movie';
import { MoviesPage } from './movies';
import { MovieDetailPage } from './../movie-detail/movie-detail';

@NgModule({
  declarations: [
    MoviesPage,
    MovieDetailPage
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
    HttpModule
  ],
  entryComponents: [
    MoviesPage,
    MovieDetailPage
  ],
  providers: [
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },
    MovieProvider
  ]
})
export class MoviesPageModule {}

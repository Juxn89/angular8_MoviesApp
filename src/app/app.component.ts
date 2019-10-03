import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesApp';

  lstCartelera: PeliculaModel[] = [];
  constructor(public movieServices: PeliculasService) {

    /*
    this.movieServices.getPopulares().subscribe(response => {
      console.log(response);
    });
    */
    /*
    this.movieServices.buscarPelicula('spiderman').subscribe(response => {
      console.log(response);
    });
    */ 
  }
}

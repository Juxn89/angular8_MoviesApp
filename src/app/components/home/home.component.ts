import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lstCartelera: PeliculaModel[] = [];
  lstPopulares: PeliculaModel[] = [];
  lstNinos: PeliculaModel[] = [];

  constructor(public movieServices: PeliculasService) {
    this.lstCartelera = this.movieServices.getCartelera('CA');
    this.lstPopulares = this.movieServices.getCartelera('P');
    this.lstNinos = this.movieServices.getCartelera('CN');

    console.log(this.lstNinos);
  }

  ngOnInit() {
  }

}

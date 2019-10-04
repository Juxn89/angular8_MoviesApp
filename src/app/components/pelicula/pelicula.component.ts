import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  id: number = 0;
  sTitulo: string = '';
  sSinopsis: string = '';
  sFrase: string = '';
  nPopularidad: number = 0;
  nPromedio: number = 0;
  sImagenURL: string = 'https://image.tmdb.org/t/p/w500_and_h282_face';

  constructor(private router: ActivatedRoute, private pelicuaServices: PeliculasService) {
    router.params.subscribe(p => {
      this.id = p['id'];
    });
    pelicuaServices.getInfoPelicula(this.id).subscribe(response => {
      this.sTitulo = response.title;
      this.sSinopsis = response.overview;
      this.sFrase = '[ No disponible ]';
      this.nPopularidad = response.popularity;
      this.nPromedio = response.vote_average;
      this.sImagenURL += response.poster_path;
    });
  }

  ngOnInit() {
  }

}

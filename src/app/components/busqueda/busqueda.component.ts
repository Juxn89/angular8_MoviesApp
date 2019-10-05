import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  lstPeliculas: PeliculaModel[] = [];
  constructor(private peliculaServices: PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(sBuscar: string) {
    this.lstPeliculas = this.peliculaServices.buscarPelicula(sBuscar);
  }
}

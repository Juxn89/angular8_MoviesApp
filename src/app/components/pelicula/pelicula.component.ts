import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';

  constructor(public ar: ActivatedRoute, public ps: PeliculasService) {
    this.ar.params.subscribe(p => {
      this.regresarA = p['pag'];

      if (p['busqueda']) {
        this.busqueda = p['busqueda'];
      }

      this.ps.getPelicula(p['id']).subscribe(response => {
        this.pelicula = response;        
      });
    });
  }

  ngOnInit() {
  }

}

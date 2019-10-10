import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar: string = '';
  constructor(public ps: PeliculasService, public ar: ActivatedRoute) { 

    this.ar.params.subscribe(params => {
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if(this.buscar.length === 0) { return; } 

    this.ps.buscarPelicula(this.buscar).subscribe(data => {
      console.log(data.results);
      this.ps.peliculas = data.results;
    }); 
  }
}

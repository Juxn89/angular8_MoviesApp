import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar: string = '';
  constructor(public ps: PeliculasService) { }

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

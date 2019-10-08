import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _ps: PeliculasService) { 
    this._ps.getCartelera().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}

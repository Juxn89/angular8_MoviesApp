import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-peli',
  templateUrl: './tarjeta-peli.component.html',
  styleUrls: ['./tarjeta-peli.component.css']
})
export class TarjetaPeliComponent implements OnInit {

  @Input() lstPeliculas: PeliculaModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}

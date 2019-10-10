import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html',
  styles: []
})
export class NarvarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarPelicula(buscar:string) {
    if(buscar.length === 0) { return; }
    
    this.router.navigate(['buscar', buscar]);
  }

}

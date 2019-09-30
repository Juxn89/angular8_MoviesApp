import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, JsonpClientBackend } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = 'f270b16e25e0900dfc031cea4605bb77';
  private urlMovieDB: string = 'https://api.themoviedb.org/3';

  constructor(private jsonp: JsonpClientBackend, private http: HttpClient) { }

  getPopulares() {
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    /*
    return this.http.get(url).pipe(
      map(response => console.log(response) )
    );
    */

    // UTLIZANDO Jsonp
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMovieDB}/searc/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }
}

import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, JsonpClientBackend } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = 'f270b16e25e0900dfc031cea4605bb77';
  private urlMovieDB: string = 'https://api.themoviedb.org/3';

  constructor(private jsonp: JsonpClientBackend, private http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    /*
    return this.http.get(url).pipe(
      map(response => console.log(response) )
    );
    */

    // UTLIZANDO Jsonp
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula(texto: string) {
    const url = `${this.urlMovieDB}/searc/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  // MIS METODOS
  getCarteleraActual(): PeliculaModel[] {
    const lstCatelera: PeliculaModel[] = [];

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=2019-10-02&primary_release_date.lte=2019-10-09&api_key=${this.apiKey}&language=es&page=1`;
    this.http.jsonp(url, 'callback').subscribe(response => {
      response.results.forEach(e => {
        lstCatelera.push({ nombre: e.title, descripcion: e.overview, urlImg: e.backdrop_path });
      });
    });
    return lstCatelera;
  }

  getCarteleraPopulares(): PeliculaModel[] {
    const lstCatelera: PeliculaModel[] = [];

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&page=1`;
    this.http.jsonp(url, 'callback').subscribe(response => {
      response.results.forEach(e => {
        lstCatelera.push({ nombre: e.title, descripcion: e.overview, urlImg: e.backdrop_path });
      });
    });
    return lstCatelera;
  }

  getCarteleraNinios(): PeliculaModel[] {
    const lstCatelera: PeliculaModel[] = [];

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&page=1`;
    this.http.jsonp(url, 'callback').subscribe(response => {
      response.results.forEach(e => {
        lstCatelera.push({ nombre: e.title, descripcion: e.overview, urlImg: e.backdrop_path });
      });
    });
    return lstCatelera;
  }
}

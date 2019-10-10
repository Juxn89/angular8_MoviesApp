import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, JsonpClientBackend } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = 'f270b16e25e0900dfc031cea4605bb77';
  private urlMovieDB: string = 'https://api.themoviedb.org/3';

  peliculas: any = [];

  constructor(private jsonp: JsonpClientBackend, private http: HttpClient) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${ desde.getDate() < 10 ? "0" + desde.getDate() : desde.getDate() }`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;
    
    let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`;
    
    return this.http.jsonp(url, 'callback');
  }
  
  getPopulares() {
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPopularesNinos() {
    let url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMovieDB}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPelicula(id:string) {
    let url = `${this.urlMovieDB}/movie/${id}?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  tempPeliculas(pelis: any) {
    this.peliculas = pelis;
  }
}

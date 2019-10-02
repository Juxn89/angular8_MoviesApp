import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// SERVICES
import { PeliculasService } from './services/peliculas.service';

// MODULES
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// ROUTING
import { APP_ROUTING } from './app.routes';
import { TarjetaPeliComponent } from './components/share/tarjeta-peli/tarjeta-peli.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    NavbarComponent,
    PeliculaComponent,
    TarjetaPeliComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

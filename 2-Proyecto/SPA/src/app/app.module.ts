import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes'
//Servicios
import {ServicioHeroes} from './components/services/heroes.service'
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTargetaComponent } from './components/heroe-targeta/heroe-targeta.component';
import { HeroeDescripcionComponent } from './components/heroe-descripcion/heroe-descripcion.component';


@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTargetaComponent,
    HeroeDescripcionComponent
  ],
  //Rutas
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  //Servicios
  providers: [
    ServicioHeroes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

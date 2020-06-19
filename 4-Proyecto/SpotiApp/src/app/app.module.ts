import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { LoadingComponent } from './components/shared/loading/loading.component'

//Importar rutas
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes';
//Pipes
import { NoImagesPipe } from './pipes/no-images.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { MensajeErrorComponent } from './components/mensaje-error/mensaje-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    NavbarComponent,
    NoImagesPipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    MensajeErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

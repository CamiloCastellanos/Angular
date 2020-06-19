import { Component, NgModule } from '@angular/core';
import { DecimalPipe, NgComponentOutlet } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pipes';
  nombre: string = "Camilo Castellanos";
  nombre2: string = "JuaN CaMiLo CASteLLanos PuEntes";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  probabilidad: number = 0.71238;
  salario: number = 3500000;
  fecha: Date = new Date();
  idioma: string = 'fr';
  videoURL: string = "https://www.youtube.com/embed/oeLO_BaArcE";
  activarPassword: boolean = true;
  heroe = {
    nombre: 'Peter Parker',
    clave: 'Spider-Man',
    edad: 17,
    direccion: {
      calle: '3',
      lugar: 'New York'
    }
  }

  valorPromesa = new Promise<string>((resolve => {
    setTimeout(() => {
      resolve('LLego la data');
    }, 4500)
  }));


}

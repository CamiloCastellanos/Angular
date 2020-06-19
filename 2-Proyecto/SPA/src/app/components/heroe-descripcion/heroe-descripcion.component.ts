import { Component, OnInit, Input } from '@angular/core';
import { ServicioHeroes, Heroe } from '../services/heroes.service'

@Component({
  selector: 'app-heroe-descripcion',
  templateUrl: './heroe-descripcion.component.html',
  styles: []
})
export class HeroeDescripcionComponent implements OnInit {

  @Input() heroe:Heroe;
  constructor() { }

  ngOnInit() {
  }

}

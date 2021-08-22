import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicioHeroes } from '../services/heroes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styles: []
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroe: any;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    //Envio de Evento
    //this.heroeSeleccionado.emit(this.index);
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicioHeroes, Heroe } from '../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  listaHeroes: Heroe[] = [];

  constructor(private _heroesService: ServicioHeroes, private router: Router) {

  }

  ngOnInit() {
    this.listaHeroes = this._heroesService.getHeroes();
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}

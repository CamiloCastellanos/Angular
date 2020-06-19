import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServicioHeroes } from '../../components/services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(public activatedRoute: ActivatedRoute, private servicioHeroes: ServicioHeroes) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe= this.servicioHeroes.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}

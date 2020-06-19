import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ServicioHeroes, Heroe } from '../services/heroes.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  listaHeroes: Heroe[] = [];
  busqueda: string = "";
  
  constructor(private router: Router, public activatedRoute: ActivatedRoute, private servicioHeroes: ServicioHeroes) {
    this.activatedRoute.params.subscribe(params => {
      this.busqueda = params['texto'];
      this.listaHeroes = this.servicioHeroes.buscarHeroe(params['texto']);
    });
  }

  ngOnInit() {
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}

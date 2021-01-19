import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: []
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    //Obtener el parametro de la URL
    this.router.params.subscribe(parametros => {
      console.log(parametros);
    })
  }

  ngOnInit(): void {
  }

}

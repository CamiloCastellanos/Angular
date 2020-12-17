import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados: any[] = [];

  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.listaEmpleados();
  }


  listaEmpleados() {
    this._empleadoService.listaEmpleados().subscribe(data => {

      data.forEach(element => {
        this.empleados.push(element.payload.doc.data());
      });
      console.log(this.empleados);

    })
  }
}

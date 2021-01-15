import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados: any[] = [];

  constructor(private _empleadoService: EmpleadoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listaEmpleados();
  }


  listaEmpleados() {
    this._empleadoService.listaEmpleados().subscribe(data => {
      this.empleados = [];

      data.forEach(element => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.empleados);
    });
  }

  eliminarEmpleado(id: string) {
    this._empleadoService.eliminarEmpleado(id)
      .then(() => {
        this.toastr.success('Eliminación Exitosa del Empleados!', 'Empleado Eliminado', {
          positionClass: 'toast-bottom-right',
          timeOut: 15000
        });
      }
      ).catch(error => {
        this.toastr.error('Eliminación Fallida del Empleados!', 'Empleado No logro ser Eliminado', {
          positionClass: 'toast-bottom-right',
          timeOut: 15000
        });
        console.log(error);
      });
  }
}

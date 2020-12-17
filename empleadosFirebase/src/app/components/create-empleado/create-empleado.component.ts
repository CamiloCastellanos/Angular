import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

  createEmpleado: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,
    private _empleadoServicio: EmpleadoService,
    private toastr: ToastrService) {

    this.createEmpleado = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      documento: ["", Validators.required],
      salario: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarEmpleado() {
    if (this.createEmpleado.invalid) {
      this.submitted = true;
      return;
    }
    this.submitted = false;
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    };

    this._empleadoServicio.agregarEmpleado(empleado)
      .then(() => {
        console.log("Ingreso Exitoso.");
        this.toastr.success('Registro Exitoso del Empleados!', 'Empleado Registrado',{
          positionClass:'toast-bottom-right'
        });
      }

      ).catch(error => {
        console.log(error);
        this.toastr.error('Registro Fallido del Empleados!', 'Empleado No logro ser Registrado',{
          positionClass:'toast-bottom-right'
        });

      });
  }

}

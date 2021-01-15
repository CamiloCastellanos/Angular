import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  loading: boolean = false;
  id: string | null;

  constructor(private fb: FormBuilder,
    private _empleadoServicio: EmpleadoService,
    private toastr: ToastrService,
    private router: Router,
    private aRoute: ActivatedRoute) {

    this.createEmpleado = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      documento: ["", Validators.required],
      salario: ["", Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
    this.editarEmpleado();
  }

  agregarEditarEmpleado() {

    if (this.createEmpleado.invalid) {
      this.submitted = true;
      return;
    }

    if (this.id === null) {
      this.agregarEmpleado();
    } else {
      this.actualizarEmpleado();
    }

  }

  actualizarEmpleado() {
    this.loading = true;
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario,
      fechaActualizacion: new Date()
    };
    this._empleadoServicio.actualizarEmpleado(this.id, empleado)
      .then(() => {
        this.toastr.success('Actualizacion Exitosa del Empleados!', 'Empleado Actualizado', {
          positionClass: 'toast-bottom-right',
          timeOut: 15000
        });
        this.loading = false;
        this.router.navigate(["listaEmpleados"]);
      }).catch(error => {
        this.toastr.error('Actualizacion Fallida del Empleados!', 'Empleado No logro ser Actualizado', {
          positionClass: 'toast-bottom-right',
          timeOut: 15000
        });
        this.loading = false;
      });

  }

  agregarEmpleado() {

    this.submitted = false;
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    };
    this.loading = true;
    this._empleadoServicio.agregarEmpleado(empleado)
      .then(() => {
        console.log("Ingreso Exitoso.");
        this.toastr.success('Registro Exitoso del Empleados!', 'Empleado Registrado', {
          positionClass: 'toast-bottom-right',
          timeOut: 15000
        });
        this.loading = false;
        this.router.navigate(["listaEmpleados"]);
      }

      ).catch(error => {
        console.log(error);
        this.toastr.error('Registro Fallido del Empleados!', 'Empleado No logro ser Registrado', {
          positionClass: 'toast-bottom-right',
          timeOut: 15000
        });
        this.loading = false;

      });
  }

  editarEmpleado() {
    if (this.id !== null) {
      this._empleadoServicio.getEmpleado(this.id).subscribe(data => {
        console.log(data.payload.data());
        this.createEmpleado.setValue({
          nombre: data.payload.data()["nombre"],
          apellido: data.payload.data()["apellido"],
          documento: data.payload.data()["documento"],
          salario: data.payload.data()["salario"]
        });
      })
    }
  }

}

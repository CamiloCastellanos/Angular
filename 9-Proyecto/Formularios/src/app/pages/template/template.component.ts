import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaicesService } from '../../services/paices.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: "",
    apellido: "",
    correo: "",
    pais: "",
    genero:""
  }
  listaPais: any[] = [];

  constructor(private paisService: PaicesService) {
  }

  ngOnInit(): void {
    this.paisService.getPais().subscribe(paisLista => {
      this.listaPais = paisLista;
      this.listaPais.unshift({
        nombre:"Seleccione Pais",
        codigo:''
      })
    });
  }

  guardar(formulario: NgForm) {
    console.log(this.usuario);
    console.log(formulario.value);

    if (formulario.invalid) {
      Object.values(formulario.controls).forEach(control => control.markAsTouched());
      return;
    }
    console.log( formulario.value );

  }

}

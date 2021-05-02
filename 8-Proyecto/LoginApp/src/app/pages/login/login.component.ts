import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme: boolean = false;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor ...'
    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(resp => {
      Swal.close();
      this.router.navigateByUrl('/home');
      if (this.recordarme) {
        localStorage.setItem('email', this.usuario.email);
      }
    }, (er) => {
      Swal.fire({
        icon: 'error',
        title: "Error al ingresar",
        text: er.error.error.message
      });
    });

  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Crear Nuevo Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  private url: string = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey: string = "AIzaSyAbPj-aS1jUSESCMxlsBYdMfSs73sYyNgI";
  private TIEMPOTOKEN: number = 3600;
  usertToken: string = "";

  constructor(private http: HttpClient) { }


  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  private guardarToken(token: string) {
    this.usertToken = token;
    localStorage.setItem('token', token);

    let hoy: Date = new Date();
    hoy.setSeconds(this.TIEMPOTOKEN);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.usertToken = localStorage.getItem('token');
    } else {
      this.usertToken = '';
    }
    return this.usertToken;
  }

  estadoAutenticado(): boolean {

    if (this.leerToken().length < 0) {
      return false;
    }
    const expira: number = Number(localStorage.getItem('expira'));
    const expiraDate: Date = new Date();
    expiraDate.setTime(expira);

    if (expiraDate >= new Date()) {
      return true;
    }
    else {
      return false;
    }
  }

}

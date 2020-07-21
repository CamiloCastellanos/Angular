import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista;
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    console.log(id);

    console.log(this.listas.find(listaData => listaData.id === id));
    return this.listas.find(listaData => listaData.id === id);
  }

  //Guarda la lista en el Local Storage
  guardarStorage() {
    //Ya que en el Local Storage solo se guardan strings se realiza la convercion del [] a string
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  //Carga la lista que este en el local Storage
  cargarStorage() {
    //Se valida que el Storage Local tenga valor guardado.
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  //Carga los elementos nuevamente exceptuando el item enviado
  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);  
    this.guardarStorage();
  }

}



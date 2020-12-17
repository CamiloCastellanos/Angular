import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private fireStore: AngularFirestore) { }

  agregarEmpleado(empelado: any): Promise<any> {
    return this.fireStore.collection("empleados").add(empelado);
  }


}

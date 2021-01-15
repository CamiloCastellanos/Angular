import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private fireStore: AngularFirestore) { }

  agregarEmpleado(empelado: any): Promise<any> {
    return this.fireStore.collection("empleados").add(empelado);
  }

  listaEmpleados(): Observable<any> {
    return this.fireStore.collection("empleados", ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarEmpleado(id: string): Promise<any> {
    return this.fireStore.collection("empleados").doc(id).delete();
  }

  getEmpleado(id: string): Observable<any> {
    return this.fireStore.collection("empleados").doc(id).snapshotChanges();
  }

  actualizarEmpleado(id: string, data:any):Promise<any> {
    return this.fireStore.collection("empleados").doc(id).update(data);
  }

}

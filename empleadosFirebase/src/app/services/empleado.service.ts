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

  listaEmpleados(): Observable<any>{
    return this.fireStore.collection("empleados", ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarEmpleado(id:string):Promise<any>{
    return this.fireStore.collection("empleados").doc(id).delete();
  }

}

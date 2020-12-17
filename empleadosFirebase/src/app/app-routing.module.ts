import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';


const routes: Routes = [
  { path: "listaEmpleados", component: ListEmpleadosComponent },
  { path: "crearEmpleado", component: CreateEmpleadoComponent },
  { path: "", redirectTo: "listaEmpleados", pathMatch: "full" },
  { path: "**", redirectTo: "listaEmpleados", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

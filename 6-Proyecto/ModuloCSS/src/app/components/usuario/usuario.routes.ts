import {  RouterModule, Routes } from '@angular/router';

//Rutas Hijas
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }

];

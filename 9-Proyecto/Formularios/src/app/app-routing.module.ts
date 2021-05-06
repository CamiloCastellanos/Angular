import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: "Reactivo", component: ReactiveComponent },
  { path: "Tempalte", component: TemplateComponent },
  { path: "", pathMatch: 'full', redirectTo: "Reactivo" },
  { path: "**", pathMatch: 'full', redirectTo: "Reactivo" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

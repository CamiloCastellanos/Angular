// Generacion automatica de componente con el comando ng generate component components/Footer (o abreviado es ng g c components/Footer)
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  fechaA: Number;
  constructor() {
    this.fechaA = new Date().getFullYear();
  }

}

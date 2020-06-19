import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    bandera: boolean;
    textoBoton: string;
    frase: any;
    personajes:string[];

    constructor() {
        this, this.bandera = true;
        this.textoBoton = this.bandera ? 'Mostar' : 'Ocultar';
        this.frase = {
            autor: 'Sargento Jhonson.',
            mensaje: 'Normalmente el señor actúa con métodos sutiles, pero hoy no, esto que veis es una intervención de divina de 66 toneladas de potencia, si Dios es amor puedes llamarme cupido.'
        };
        this.personajes=['Master Chief','Cortana','Sargento Jhonson','Inquisidor','Flood'];
    }
    cambio() {
        this.bandera = !this.bandera;
        this.textoBoton = !this.bandera ? 'Mostrar' : 'Ocultar'
    };
}
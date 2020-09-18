import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  
  listaIonic: IonList;
  @Input() terminada = true;

  constructor(public deseosServices: DeseosService,
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }

  }

  borrarLista(lista: Lista) {
    this.deseosServices.borrarLista(lista);
  }

  async cambiarNombre(lista: Lista) {
    const alert = await this.alertController.create({
      header: 'Modificar Nombre',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.listaIonic.closeSlidingItems();
          }
        },
        {
          text: 'Modificar',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosServices.guardarStorage();
            this.listaIonic.closeSlidingItems();
          }
        }
      ]
    });
    await alert.present();
  }

}

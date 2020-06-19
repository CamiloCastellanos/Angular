import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  canciones: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  mensajeError: string = "";

  constructor(private sportifyServices: SpotifyService) {
    this.sportifyServices.getNewReleases().subscribe((resp: any) => {
      this.canciones = resp;
      this.loading = false;
      this.error = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}

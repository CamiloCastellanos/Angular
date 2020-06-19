import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  private artistaId: string;
  artistaInformacion: any = {};
  loading: boolean = true;
  topTracks: any = {};
  error: boolean = false;
  mensajeError: string = "";

  constructor(private router: ActivatedRoute, private spotifyServicio: SpotifyService) {
    this.router.params.subscribe((params: any) => {
      this.artistaId = params.id;
    });

    this.getInformacionArtista();
    this.getTopTracks();
  }

  ngOnInit() {
  }

  getInformacionArtista() {
    this.spotifyServicio.getInformacionArtista(this.artistaId)
      .subscribe((resp: any) => {
        this.artistaInformacion = resp;
        this.loading = false;
        this.error=false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });
  }

  getTopTracks() {
    this.spotifyServicio.getTopTracks(this.artistaId)
      .subscribe((resp: any) => {
        this.topTracks = resp;

        console.log(resp);
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });;
  }

}

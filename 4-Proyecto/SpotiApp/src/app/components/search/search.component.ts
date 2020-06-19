import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = []
  loading: boolean;
  error: boolean = false;
  mensajeError: string = "";
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    if (termino == "") {
      this.artistas = [];
      this.loading = false;
      return;
    }
    this.spotifyService.getArtista(termino).subscribe((resp: any) => {
      this.artistas = resp;
      this.loading = false;
      this.error = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

}

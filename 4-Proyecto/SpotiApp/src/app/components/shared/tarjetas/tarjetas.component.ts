import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista(artista: any) {
    let id: string = "";
    if (artista["type"] === "album") {
      id = artista["artists"][0].id;
    }
    if (artista["type"] == "artist") {
      id = artista.id;
    }

    this.router.navigate(['/artista', id]);
  }
}

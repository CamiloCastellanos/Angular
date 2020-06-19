import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
  }

  private getQuery(query: string) {

    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAbHH8_S5DZpDGWNeUWfoyD2h76CVNaYNW0GXO106eOvYzOuZbRHozffEnQSx-5OpElOJVWPR3-hVwd8jM'
    });

    return this.httpClient.get(URL, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }

  getInformacionArtista(artistaId: string) {
    return this.getQuery(`artists/${artistaId}`);
  }

  getTopTracks(artistaId: string) {
    return this.getQuery(`artists/${artistaId}/top-tracks?country=co`)
      .pipe(map(data => data['tracks']));;
  }

}

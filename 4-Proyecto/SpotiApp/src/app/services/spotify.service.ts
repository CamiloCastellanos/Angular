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
      'Authorization': 'Bearer BQCA2g0td1laym1L8p0Y9Pu8k1-JLiQHqgb2Hl1FiT34d8osRZws5TE8-fWp2baE3J3DCaDvU0ewe6I2Yhc'
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

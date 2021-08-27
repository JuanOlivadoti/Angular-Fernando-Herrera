import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'Bearer ' + 'BQDOVvkSgiaAS3zSW6-BJylyQMexFBQ8FZY81c7P85nAjspUvTsubKdMSS3V8FQKBpG2HhA6Mixdv58sgNE';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(url, { headers: headers })
  }

  getNewReleases() {

    let limit = 20;
    let query = `browse/new-releases?limit=${limit}`;


    return this.getQuery(query)
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtistas(termino: string) {
    let limit = 15;
    let query = `search?q=${termino}&type=artist&limit=${limit}`;

    return this.getQuery(query)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    let query = `artists/${id}`;
    return this.getQuery(query)
      .pipe(map(data => data))
  }

  getTopTracks(id: string) {
    let query = `artists/${id}/top-tracks?country=us`;
    return this.getQuery(query)
      .pipe(map(data => data['tracks']))
  }
  // getNewReleases() {

  //   // const headers = new HttpHeaders({
  //   //   'Authorization': this.token
  //   // });

  //   let limit = 20;
  //   let query = `browse/new-releases?limit=${limit}`;

  //   // return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, { headers: headers })
  //   //   .pipe(map(data => {
  //   //     return data['albums'].items;
  //   //   }))

  //   return this.getQuery(query)
  //     .pipe(map(data => {
  //       return data['albums'].items;
  //     }));
  // }

  // getArtistas(termino: string) {

  //   // const headers = new HttpHeaders({
  //   //   'Authorization': this.token
  //   // });

  //   let limit = 15;
  //   let query = `search?q=${termino}&type=artist&limit=${limit}`;

  //   return this.getQuery(query)
  //     .pipe(map(data => data['artists'].items));

  //   // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=${limit}`, { headers: headers })
  //   //   .pipe(map(data => data['artists'].items
  //   //   ));
  // }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  topTracksUri = 'https://open.spotify.com/embed?uri=';

  loading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {

    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtistaData(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtistaData(id: string) {

    this.loading = true;
    this.spotifyService.getArtista(id)
      .subscribe(data => {
        console.log(data)
        this.artista = data;
        this.loading = false;
      })
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(data => {
        console.log(data)
        this.topTracks = data;
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean = true;

  error: boolean;
  errorMessage: string = '';

  constructor(private spotifyService: SpotifyService) {

    this.error = false;
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, err => {
        this.loading = false;
        this.error = true;
        this.errorMessage = err.error.error.message;
      });
  }

  ngOnInit(): void {
  }

}

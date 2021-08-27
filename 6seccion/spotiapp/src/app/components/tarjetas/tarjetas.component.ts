import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  verSearchArtist(item: any) {
    this._verArtista(item.id);
  }
  verBadge(id: any) {
    this._verArtista(id)
  }

  _verArtista(id){
    this.router.navigate(['/artist', id])
  }

}

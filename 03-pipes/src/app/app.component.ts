import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan América';
  nombre2: string = 'JuAn PabLo OliVadoTi';

  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI:number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 3256.5;

  fecha: Date = new Date();

  idioma: string = 'es';
  activar: boolean = false;

  videoUrl: string = 'https://www.youtube.com/embed/xa8lhVwQBw4';
  
  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  changeLang(lang){
    this.idioma = lang;
  }
}

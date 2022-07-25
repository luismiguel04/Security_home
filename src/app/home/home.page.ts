import { Component } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides = [
    {
      img: 'assets/img/casa1.jpg',
      titulo: 'Seguridad <br> la mejor opción para el hogar',
    },
    {
      img: 'assets/img/casa2.jpg',
      titulo: 'Acecibilidad<br>para cualquier econimia',
    },
    {
      img: 'assets/img/casa3.jpg',
      titulo: 'Confiabilidad<br> certeza y confianza',
    },
  ];
  constructor(private vibration: Vibration) { }
  vibrar() {
    this.vibration.vibrate([2000, 1000, 2000]);
  }

}

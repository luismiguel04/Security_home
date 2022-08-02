import { Component, OnInit } from '@angular/core';

import { AuthServices } from '../../service/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string;
  password: string;
  isLogged: boolean;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public auth: AuthServices,
    private alertController: AlertController
  ) { }

  /* Signup() {
    let f = { name: this.name, password: this.password }; */
  /* console.log(f); */
  /*   this.auth.login(f) */
  /*  .then(data => { */
  /*   rs => this.isLogged = rs, */
  /* er => console.log(er), */

  /* if (this.isLogged = true) {
    this.router.navigateByUrl('/dashboard', { replaceUrl: true }) */
  /*  error => console.log(error)); */
  /*     } else {
      
        .then(data => console.log(data);
        console.log('Acceso denegado');
        )
        (error: any) => console.log(error);
      }
  
  
  
    } */
  Signupv() {
    let f = { name: this.name, password: this.password };
    this.auth.login(f)
      .subscribe(
        rs => this.isLogged = rs,
        rs => console.log(rs),
        () => {
          if (this.isLogged == true) {
            this.router.navigateByUrl('/dashboard', { replaceUrl: true })
            /* .then(data => console.log(data),
              error => console.log(error)); */
            //this.presentAlert();
          } else {
            this.presentAlert();
            console.log('Acceso denegado');
          }
        }
      )
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso denegado',
      //subHeader: 'Acceso denegado',
      message: 'El usuario o contraseña no son correctos',
      buttons: ['OK']
    });

    await alert.present();
  }




  ngOnInit() {
  }

}










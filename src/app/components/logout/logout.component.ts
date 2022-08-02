import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../service/auth.service';
/* import { ToastController } from '@ionic/angular'; */

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(public auth: AuthServices/*  public toastController: ToastController */) { }

  ngOnInit() {
    /*    const button = document.querySelector('ion-button');
       button.addEventListener('click', this.presentToastWithOptions); */
  }
  logout() {
    this.auth.logout();
    console.log('logged out suseffuly');
  }


  /* async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  } */
}

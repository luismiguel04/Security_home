import { Injectable, Type } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { pipe } from 'rxjs';
/* import { Observable } from 'rxjs'; */

/* import 'rxjs/add/operator/map'; */


@Injectable()
export class AuthServices {
  name: string;
  loggedIn: boolean;
  url = 'http://192.168.1.66:5000/auth';

  constructor(private httpClient: HttpClient) {
    this.name = '';
    this.loggedIn = false;
  }


  /* postDatos() {
    const datos = { nombre: 'Edu', email: 'edu.revilla.vaquero@gmail.com' };

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const url = 'https://www.miservicio.com/adduser/';

    return this.httpClient.post(url, JSON.stringify(datos), options).toPromise();
  } */

  login(userInfo) {
    let url = `${this.url}/login`;
    const iJon = JSON.stringify(userInfo)

    console.log(url);
    console.log(iJon);

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'responseType': 'text',
      },

    };
    /*    return new Promise((resolve, reject) => { */
    return this.httpClient.post(url, iJon, options)
      /* .subscribe( */
      .pipe(map(res => {
        /*  resolve(res); */
        console.log(res);



        if (res === 0 /* || "Usuario y/o Contraseña Incorrecta no found" || res == 'Por favor ingresa Usuario y Contraseña!' */) {
          this.loggedIn = false;
          console.log("esta mal todo");
        } else {

          localStorage.setItem('token', JSON.stringify(res));
          //localStorage.setItem('token',JSON.parse(res)/*  JSON.stringify({ token: res }) */);
          console.log(res);
          this.name = userInfo.name;
          this.loggedIn = true;
        }
        console.log(this.loggedIn);
        return this.loggedIn;

      }));

  }

  logout(): void {
    localStorage.removeItem('token');
    this.name = '';
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
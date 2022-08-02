import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  constructor(private ref: ChangeDetectorRef) { }
  ngOnInit(): void {



    this.ref.detectChanges();
    this.generarcharts();
    this.generarcharts2();
    this.generarcharts3();
    this.ref.detectChanges();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  generarcharts() {
    const canvas = document.getElementById('mychart');
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {

        labels: [],
        datasets: [{
          label: 'Lugares de sensores',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          /*  hoverOffset: 6, */
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }, plugins: {
          title: {
            display: true,
            text: 'Sensores por lugar',
          }
        }
      }
    });

    const url = "http://192.168.1.66:5000/bitacora";
    fetch(url)
      .then(response => response.json())
      .then(datos => mostrar(datos))
      .catch(error => console.log(error))

    const mostrar = (articulos) => {
      articulos.forEach(element => {
        myChart.data['labels'].push(element.Lugar)
        myChart.data['datasets'][0].data.push(element.Id)

      });
    }


  }
  generarcharts2() {
    const canvas = document.getElementById('mychart2');
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {

        labels: [],
        datasets: [{
          label: 'Lugares de sensores',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          /*  hoverOffset: 6, */
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }, plugins: {
          title: {
            display: true,
            text: 'Sensores por lugar',
          }
        }
      }
    });

    const url = "http://192.168.1.66:5000/vsensores";
    fetch(url)
      .then(response => response.json())
      .then(datos => mostrar(datos))
      .catch(error => console.log(error))

    const mostrar = (articulos) => {
      articulos.forEach(element => {
        myChart.data['labels'].push(element.Lugar)
        myChart.data['datasets'][0].data.push(element.cantidad)

      });
    }


  }
  generarcharts3() {
    const canvas = document.getElementById('mychart3');
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {

        labels: [],
        datasets: [{
          label: 'Lugares de sensores',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          /*  hoverOffset: 6, */
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }, plugins: {
          title: {
            display: true,
            text: 'Sensores por lugar',
          }
        }
      }
    });

    const url = "http://192.168.1.66:5000/vsensores";
    fetch(url)
      .then(response => response.json())
      .then(datos => mostrar(datos))
      .catch(error => console.log(error))

    const mostrar = (articulos) => {
      articulos.forEach(element => {
        myChart.data['labels'].push(element.Lugar)
        myChart.data['datasets'][0].data.push(element.cantidad)

      });
    }


  }

}

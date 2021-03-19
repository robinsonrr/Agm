import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba3';
  lat = 51.678418;
  lng = 7.809007;

  lugares =[
    {lugar:'Calle Club Activo 20 - 30', lat:18.493241, lng:-69.862555},
    {lugar:'Colegio San Jose Obrero', lat:18.492264, lng:-69.864341},
    {lugar:'Iglesia Cristiana Vida Renovada,', lat:18.491175, lng:-69.863542},
    {lugar:'Avenida Sabana Larga 42A', lat:18.489028, lng:-69.865435}
  ]

  saludo(item){
    window.alert(item);
  }
}

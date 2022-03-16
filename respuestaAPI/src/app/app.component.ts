import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'respuestaAPI';

  articulos : any = null;

  constructor (private articulosServices : ArticulosService) {} //INYECCION DEL SERVICES

  ngOnInit() {
    this.articulosServices.retornar().subscribe( resultado =>  this.articulos = resultado );//CON EL SERVICIO INYECTADO SOLO LLAMAMOS A UNA FUNCIÓN IDENTADA QUE NOS RETORNA LOS VALORES
  }
}

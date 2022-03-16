import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ //IMPLEMENTA LA INTERFACES ONINIT PARA CARGAR
  title = 'EjemploPapasServices';

  articulos : any = null;
              //inyeccion del services YA QUE SERÁ UNA ÚNICA INSTANCIA, POR ELLO SE DEBE DE DEFINIR IMPRESCINDIBLEMENTE EN EL CONSTRUCTOR
  constructor(private articuloServices : ArticulosService) { //DECLARAMOS EN EL CONSTRUCTOR UN ATRIBUTO DE TIPO CLASE SERVICES PARA APLICAR A LA RESPUESTA
  }

  //CON EL MÉTODO DE LA INTERFACES OnInit DISPONES DEL VALOR DEL MÉTODO DEL ATRIBUTO SERVICES AL ATRIBUTO DE ÉSTA CLASE PARA OBTENER VALOR A VALOR LAS REPUESTAS DEL JSON
  ngOnInit(): void {
      this.articulos = this.articuloServices.retornar();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //IMPORTACION DEL PAQUETE HTTP

@Injectable({//PUNTO DE ACCESO GLOBAL
  providedIn: 'root'
})
export class ArticulosService {

  //EN EL CASO DE OBTENER UNA RESPUESTA MEDIANTE API, DEBEMOS DECLARAR EN EL CONSTRUCTOR EL ATRIBUTO DE TIPO HTTPCLIENT E IMPORTARLA

  constructor(private http : HttpClient) { }


  //EN EL CASO DE OBTENER RESPUESTA A UNA API EXTERNA, DEBEMOS DE INDICAR LA DIRECCION EXACTA DE LA MISMA Y APUNTAR A ELLA MEDIANTE EL MÉTODO ".get"
  retornar() {
    return this.http.get("http://scratchya.com.ar/vue/datos.php");
  }
}

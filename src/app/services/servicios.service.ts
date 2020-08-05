import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../interfaces/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  servicos: Servicios[] = [{}];

  cargada = false;

  constructor(private http: HttpClient) {

    this.cargarSercicios();

   }

  private cargarSercicios() {
    // Leer el archivo JSON
    this.http.get('https://page-hv.firebaseio.com/Servicios.json')
    .subscribe( (resp: [Servicios]) => {
      this.servicos = resp;
      this.cargada = true;
      //console.log(resp);
    });
 }

}

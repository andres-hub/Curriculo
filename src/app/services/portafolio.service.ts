import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portafolio } from '../interfaces/portafolio';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  portafolio : Portafolio[] = [{}];
  cargada = false;

  constructor( private http: HttpClient) {

    this.cargarPortafilo();

   }

  private cargarPortafilo(){

    this.http.get('https://page-hv.firebaseio.com/Portafolio.json')
    .subscribe( (resp: [Portafolio]) => {
      this.portafolio = resp;
      this.cargada = true;
      //console.log(resp);
    });

  }

}

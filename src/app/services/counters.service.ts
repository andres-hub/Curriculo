import { Injectable } from '@angular/core';
import { Counters } from '../interfaces/counters';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  counters: Counters [] = [];
  cargada = false;

  constructor(public http: HttpClient) {
    this.cargarCounters();
   }

  cargarCounters(){

    this.http.get('https://page-hv.firebaseio.com/Contadores.json')
    .subscribe((resp:[Counters])=>{
      this.counters = resp;
      this.cargada = true;
    })

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = [{}];
  cargada = false;

  constructor(public http: HttpClient) {

    this.cargarSkills();

   }

  private cargarSkills(){

    this.http.get('https://page-hv.firebaseio.com/Skills.json')
    .subscribe((resp: [Skill])=>{
      this.skills = resp;
      this.cargada = true;
      //console.log(resp);
    })

  }

}

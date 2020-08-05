import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public skillsService: SkillService) { }

  ngOnInit(): void {
  }

}

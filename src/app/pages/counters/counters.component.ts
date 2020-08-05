import { Component, OnInit } from '@angular/core';
import { CountersService } from '../../services/counters.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  constructor(public conuntersServicios: CountersService) { }

  ngOnInit(): void {
  }

}

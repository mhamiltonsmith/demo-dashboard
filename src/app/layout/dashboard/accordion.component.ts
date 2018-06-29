import { Component, OnInit } from '@angular/core';

declare var data: any;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  data = data

  constructor() { }

  ngOnInit() {
  }

}

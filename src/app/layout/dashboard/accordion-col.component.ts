import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-col',
  templateUrl: './accordion-col.component.html',
  styleUrls: ['./accordion-col.component.css']
})
export class AccordionColComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-accordion-col',
  templateUrl: './accordion-col.component.html',
  styleUrls: ['./accordion-col.component.css']
})
export class AccordionColComponent implements OnInit, OnChanges {

  @Input() travel_doc: any;       /** Column-specific data object */
  @Input() doc_names:  string[];  /** Names of all columns in the accordion */

  constructor() { }

  ngOnInit() { }

  ngOnChanges() { }

}

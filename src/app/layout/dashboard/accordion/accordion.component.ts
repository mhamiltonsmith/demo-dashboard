import { Component, OnInit, ChangeDetectorRef, OnChanges, DoCheck, OnDestroy, Input } from '@angular/core';
import { IntakeOffice } from '../../../intake-office/IntakeOffice';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

   private sub:         any;           /** Subscription */
   private office_data: IntakeOffice;  /** Accordion-specific data object */
   private doc_names:   string[];

  updateData(office_data: IntakeOffice) {
    this.office_data = office_data;
  }

  initDocNames() {
    this.doc_names = [];
    for (var doc in this.office_data.travelDocs) {
      this.doc_names.push(this.office_data.travelDocs[doc].name);
    }
  }

  constructor() { }

  ngOnInit() { 
    this.initDocNames();
  }

  ngAfterContentInit() { }

  ngOnChanges() { }

  ngDoCheck() { }

  ngOnDestroy() { }
}

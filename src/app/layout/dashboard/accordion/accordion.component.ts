import { Component, OnInit, ChangeDetectorRef, OnChanges, DoCheck, OnDestroy, Input } from '@angular/core';
import { Metric }       from '../../../office/Office';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

   private sub:            any;
   private accordion_data: Metric;
   private col_names:      string[];

  updateMetric(metric_data: Metric) {
    this.accordion_data = metric_data;
  }

  initColNames() {
    this.col_names = [];
    for (var i in this.accordion_data.travelDocs) {
      this.col_names.push(this.accordion_data.travelDocs[i].name);
    }
  }

  getAccordionId() {
    return "accordion" + "-" + this.accordion_data.name.toLowerCase()
  }

  constructor() { }

  ngOnInit() { 
    this.initColNames();
  }

  ngAfterContentInit() { }

  ngOnChanges() { }

  ngDoCheck() { }

  ngOnDestroy() { }
}

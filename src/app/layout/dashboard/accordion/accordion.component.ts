import { Component, OnInit, ChangeDetectorRef, OnChanges, DoCheck, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntakeOffice } from '../IntakeOffice';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input() office_id:   number;
   private sub:         any;           /** Subscription */
   private doc_names:   string[];      /** Names of all the columns in the accordion */
   private office_data: IntakeOffice;  /** Accordion-specific data object */

  constructor( private dashboardService: DashboardService, private route: ActivatedRoute ){ }

  getDocNames(): string[] {
    var names = [];
    for (var doc in this.office_data.travelDocs) {
      names.push(this.office_data.travelDocs[doc].name);
    }
    return names;
  }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      this.office_id = +params['id'];
      this.office_data = this.dashboardService.getIntakeOffice(this.office_id);
      this.doc_names = this.getDocNames();
    });
  }

  ngAfterContentInit() {
  }

  ngOnChanges() {
  }

  ngDoCheck() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

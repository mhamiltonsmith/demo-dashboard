import { Component, OnInit, AfterViewInit, Input, OnDestroy, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute }      from '@angular/router';
import { Office }              from '../../office/Office';
import { OfficeService }       from '../../office/office.service';
import { LayoutService }       from '../layout.service';
import { AccordionService }    from './accordion/accordion.service';
import { StatsBoxService }     from './stats-box/stats-box.service';
import { MapWidgetComponent }  from './map-widget/map-widget.component';
import { StatsBoxComponent }   from './stats-box/stats-box.component';
import { AccordionComponent }  from './accordion/accordion.component';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  public  title:            string        = "Dashboard";
  private office_data:      Office;
  private sub:              any;

  @ViewChild(MapWidgetComponent) map_widget_component: MapWidgetComponent

  @ViewChild('statsBox',  { read: ViewContainerRef }) statsBoxContainerRef: ViewContainerRef
  @ViewChild('accordion', { read: ViewContainerRef }) accordionContainerRef: ViewContainerRef

  updateData() {
    this.map_widget_component.updateOffice(this.office_data);
    this.map_widget_component.makeMap();
  }

  constructor(
      private accordionService:    AccordionService,
      private statsBoxService:     StatsBoxService,
      private officeService:       OfficeService,
      private layoutService:       LayoutService,
      public route:                ActivatedRoute
    ) { this.accordionService = accordionService; }

  ngOnInit() {
    this.layoutService.updateTitle(this.title);
    this.accordionService.setRootViewContainerRef(this.accordionContainerRef);
    this.statsBoxService.setRootViewContainerRef(this.statsBoxContainerRef);
    this.sub = this.route.params.subscribe(params => { 
      var office_name = params['id'];
      this.office_data = this.officeService.getOffice(office_name);
      this.layoutService.updateTitle(this.title);
      this.statsBoxContainerRef.clear();
      this.accordionContainerRef.clear();
      this.accordionService.addAccordionComponents(this.office_data.metrics);
      this.statsBoxService.addStatsBoxComponents(this.office_data.metrics);
      this.updateData();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
  }

}

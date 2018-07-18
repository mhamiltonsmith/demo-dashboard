import { Component, OnInit, AfterViewInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute }      from '@angular/router';
import { IntakeOffice }        from '../../intake-office/IntakeOffice';
import { IntakeOfficeService } from '../../intake-office/intake-office.service';
import { LayoutService }       from '../layout.service';
import { MapWidgetComponent }  from './map-widget/map-widget.component';
import { ListBoxComponent }    from './list-box/list-box.component';
import { StatsBoxComponent }   from './stats-box/stats-box.component';
import { AccordionComponent }  from './accordion/accordion.component';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  public  title:       string        = "Dashboard";
  public  name:        string        = "Global";
  private office_data: IntakeOffice;
  private sub:         any;
  private has_office:  boolean       = false;

  @ViewChild(MapWidgetComponent) map_widget_component: MapWidgetComponent
  @ViewChild(StatsBoxComponent)  stats_box_component:  StatsBoxComponent
  @ViewChild(AccordionComponent) accordion_component:  AccordionComponent

  updateData() {
    this.map_widget_component.updateData(this.office_data);
    this.stats_box_component.updateData(this.office_data);
    this.accordion_component.updateData(this.office_data);
    this.map_widget_component.makeMap();
  }

  constructor(private intakeOfficeService: IntakeOfficeService, private layoutService: LayoutService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.layoutService.updateTitle(this.title);
    this.sub = this.route.params.subscribe(params => { 
      var office_name = params['id'];
      this.office_data = this.intakeOfficeService.getOffice(office_name);
      this.layoutService.updateTitle(this.title);
      this.updateData();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    this.updateData();
  }

}

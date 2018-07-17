import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Router }              from '@angular/router';
import { IntakeOfficeService } from '../../intake-office/intake-office.service';
import { LayoutService }       from '../layout.service';
import { MapWidgetComponent }  from '../dashboard/map-widget/map-widget.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {

  title:        string    = "Dashboard"
  office_names: string[];

  @ViewChild(MapWidgetComponent) map_widget_component: MapWidgetComponent

  goToOffice(office_name) {
    this.router.navigate(['./network', office_name.toLowerCase()]);
  }

  constructor( private intakeOfficeService: IntakeOfficeService, private layoutService: LayoutService, public router: Router ) { }

  ngOnInit() {
    this.office_names = this.intakeOfficeService.getOfficeNames();
    this.layoutService.updateTitle(this.title);
    this.map_widget_component.makeMap();
  }

  ngAfterViewInit() { }

}

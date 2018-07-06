import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntakeOffice } from './IntakeOffice';
import { office_data } from '../../../assets/js/ircc-ui-office.js';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  private office_data: IntakeOffice;
  private office_id:   number;
  private sub:         any;

  makeMap(){
    var color1 = App.color.primary;
    $('#region-map').empty();
    $('#region-map').vectorMap({
      map: this.office_data.map,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: color1,
        },
        hover: {
          "fill-opacity": 0.8
        }
      }
    });
  }

  constructor(private dashboardService: DashboardService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { 
      this.office_id = +params['id'];
      this.office_data = this.dashboardService.getIntakeOffice(this.office_id);
      this.makeMap()
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    App.init();
    App.ChartJs();
    this.makeMap()
  }

}

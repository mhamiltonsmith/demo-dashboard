import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: [
    './map-widget.component.css',
    '../../../../assets/lib/jqvmap/jqvmap.min.css'
  ]
})
export class MapWidgetComponent implements OnInit, OnDestroy {

  private sub:       any;
  private office_id: number;
  private region:    string;

  constructor( private dashboardService: DashboardService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.office_id = +params['id'];
      var office_data = this.dashboardService.getIntakeOffice(this.office_id);
      this.region = office_data.name;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

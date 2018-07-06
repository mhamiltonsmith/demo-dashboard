import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

declare var numeral: any;

@Component({
  selector: 'app-stats-box',
  templateUrl: './stats-box.component.html',
  styleUrls: ['./stats-box.component.css']
})
export class StatsBoxComponent implements OnInit {

  private  sub:         any;
           office_id:   number;
           office_data: any;

  constructor( private dashboardService: DashboardService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.office_id = +params['id'];
      this.office_data = this.dashboardService.getIntakeOffice(this.office_id);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

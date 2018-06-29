import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var content: any;
declare var App: any;
declare var office_data: any;
declare var numeral: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  content = content

  kpis: any[] = [
    {
      id:1,name:'TRV',
      ytd_value:numeral(office_data.intake.trv.ytd.current).format('0.0a'),
      week_value:numeral(office_data.intake.trv.week.current).format('0.0a'),
      rank:office_data.intake.trv.rank
    },
    {
      id:2,name:'SP',
      ytd_value:numeral(office_data.intake.sp.ytd.current).format('0.0a'),
      week_value:numeral(office_data.intake.sp.week.current).format('0.0a'),
      rank:office_data.intake.sp.rank
    },
    {
      id:3,name:'WP',
      ytd_value:numeral(office_data.intake.wp.ytd.current).format('0.0a'),
      week_value:numeral(office_data.intake.wp.week.current).format('0.0a'),
      rank:office_data.intake.wp.rank
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    App.init();
    App.chartsSparklines();
    App.ChartJs();
    App.mapsVector();
  }

}

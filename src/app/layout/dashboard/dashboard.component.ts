import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var content: any;
declare var App: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  content = content

  getDifference(valueA: number, valueB: number): string {
    return (valueB - valueA).toFixed(1).replace(/[.,]0$/, "");
  }
  getPercentageChange(valueA: number, valueB: number): string {
    return (((valueB - valueA)/valueA)*100).toFixed(1).replace(/[.,]0$/, "");
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    App.init();
    App.dashboard();
    App.chartsSparklines();
    App.ChartJs();
  }

}

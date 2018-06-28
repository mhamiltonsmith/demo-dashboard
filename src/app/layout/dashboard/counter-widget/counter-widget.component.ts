import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

declare var content: any;

@Component({
  providers:[DashboardComponent],
  selector: 'app-counter-widget',
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {

  getDifference = this.DashboardComponent.getDifference
  getPercentageChange = this.DashboardComponent.getPercentageChange

  content = content

  constructor(private DashboardComponent: DashboardComponent) { }

  ngOnInit() {
  }

}

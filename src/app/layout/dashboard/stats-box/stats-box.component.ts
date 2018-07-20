import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Metric } from '../../../office/Office';

declare var numeral: any;

@Component({
  selector: 'app-stats-box',
  templateUrl: './stats-box.component.html',
  styleUrls: ['./stats-box.component.css']
})
export class StatsBoxComponent implements OnInit {

  private  metric_data: Metric;

  updateMetric(metric_data: Metric) {
    this.metric_data = metric_data;
  }

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }
}

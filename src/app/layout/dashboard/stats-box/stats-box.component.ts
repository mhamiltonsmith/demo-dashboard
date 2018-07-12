import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IntakeOffice } from '../../../intake-office/IntakeOffice';

declare var numeral: any;

@Component({
  selector: 'app-stats-box',
  templateUrl: './stats-box.component.html',
  styleUrls: ['./stats-box.component.css']
})
export class StatsBoxComponent implements OnInit {

  private  office_data: IntakeOffice;

  updateData(office_data: IntakeOffice) {
    this.office_data = office_data;
  }

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }
}

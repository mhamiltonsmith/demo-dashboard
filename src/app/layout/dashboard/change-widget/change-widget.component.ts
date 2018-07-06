import { Component, OnInit, Input } from '@angular/core';

declare var numeral: any;

@Component({
  selector: 'app-change-widget',
  templateUrl: './change-widget.component.html',
  styleUrls: ['../../../../assets/css/arrows_mod.css']
})
export class ChangeWidgetComponent implements OnInit {

  @Input() term:      any;
  numeral = numeral;

  getDifference(previous: number, current: number): number {
    return (current - previous);
  }
  getPercentageChange(previous: number, current: number): number {
    return (((current - previous)/previous)*100);
  }

  isIncreasing(previous: number, current: number): boolean {
    if (previous < current) {
      return true;
    } else {
      return false;
    }
  }

  percentageChange(data): string {
    var pChange = this.getPercentageChange(data.previous, data.current)
    if (pChange < 0) {
      return " (" + numeral(this.getPercentageChange(data.previous, data.current)).format('0.0a') + "%)";
    } else {
      return " (+" + numeral(this.getPercentageChange(data.previous, data.current)).format('0.0a') + "%)";
    }
  }

  amountChange(data): string {
    var aChange = this.getDifference(data.previous, data.current)
    if (aChange < 0) {
      return numeral(this.getDifference(data.previous, data.current)).format('0.a');
    } else {
      return "+" + numeral(this.getDifference(data.previous, data.current)).format('0.a');
    }
  }

  fontColor(data): string {
    if (this.isIncreasing(data.previous, data.current)) {
      return "green";
    } else {
      return "red";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

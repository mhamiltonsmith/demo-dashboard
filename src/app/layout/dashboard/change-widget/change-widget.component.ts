import { Component, OnInit, Input } from '@angular/core';

declare var numeral: any;

@Component({
  selector: 'app-change-widget',
  templateUrl: './change-widget.component.html',
  styleUrls: ['../../../../assets/css/arrows_mod.css']
})
export class ChangeWidgetComponent implements OnInit {

  @Input() widget_data:      any;

  getFormattedCurrent() {
    return numeral(this.widget_data.current).format('0.0a');
  }

  getDifference(): number {
    return (this.widget_data.current - this.widget_data.previous);
  }
  getPercentageChange(): number {
    return (((this.widget_data.current - this.widget_data.previous)/this.widget_data.previous)*100);
  }

  isIncreasing(): boolean {
    if (this.widget_data.previous < this.widget_data.current) {
      return true;
    } else {
      return false;
    }
  }

  percentageChange(): string {
    var pChange = this.getPercentageChange()
    if (pChange < 0) {
      return " (" + numeral(pChange).format('0.0a') + "%)";
    } else {
      return " (+" + numeral(pChange).format('0.0a') + "%)";
    }
  }

  amountChange(): string {
    var aChange = this.getDifference()
    if (aChange < 0) {
      return numeral(aChange).format('0.a');
    } else {
      return "+" + numeral(aChange).format('0.a');
    }
  }

  fontColor(): string {
    if (this.isIncreasing()) {
      return "green";
    } else {
      return "red";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

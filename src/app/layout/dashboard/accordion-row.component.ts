import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var numeral: any;

@Component({
  selector: 'app-accordion-row',
  templateUrl: './accordion-row.component.html',
  styleUrls: ['./accordion-row.component.css']
})
export class AccordionRowComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  numeral = numeral;


  getDifference(valueA: number, valueB: number): number {
    return (valueB - valueA);
  }
  getPercentageChange(valueA: number, valueB: number): number {
    return (((valueB - valueA)/valueA)*100);
  }

  isIncreasing(valueA: number, valueB: number): boolean {
    if (valueA < valueB) {
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

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}

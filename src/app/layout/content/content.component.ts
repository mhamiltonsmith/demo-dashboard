import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var content: any;
declare var App: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  content = content
  title = "Passports"

  constructor() { }

  getDifference(valueA: number, valueB: number): string {
    return (valueB - valueA).toFixed(2).replace(/[.,]00$/, "");
  }
  getPercentageChange(valueA: number, valueB: number): string {
    return ((valueB - valueA)/valueA).toFixed(2).replace(/[.,]00$/, "");
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    App.init();
  }

}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var App: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  filler = "Welcome to the Dashboard Startpage"

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    App.init();
  }

}

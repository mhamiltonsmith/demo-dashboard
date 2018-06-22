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

  ngOnInit() {
  }

  ngAfterViewInit() {
    App.init();
  }

}

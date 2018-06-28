import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var App: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../app.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    App.init()
  }

}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IntakeOfficeService } from '../../intake-office/intake-office.service';

declare var App: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {

  title  = "Home"
  filler = "Welcome to the Dashboard Startpage"

  constructor( private intakeOfficeService: IntakeOfficeService ) { }

  ngOnInit() {
    this.intakeOfficeService.sendTitle(this.title);
  }

  ngAfterViewInit() { }

}

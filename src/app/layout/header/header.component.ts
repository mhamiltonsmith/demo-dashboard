import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }                       from '@angular/router';
import { Subscription }                 from 'rxjs';  
import { IntakeOfficeService }          from '../../intake-office/intake-office.service';
import { LayoutService }                from '../layout.service';


@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../../../assets/lib/material-design-icons/css/material-design-iconic-font.min.css',
    '../../app.component.css'
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  private sub:     any;
  public  title:   string ;

  constructor( private intakeOfficeService: IntakeOfficeService, private layoutService: LayoutService ) { }

  ngOnInit() {
    this.sub = this.layoutService.getTitle().subscribe(title => {
      this.title = title.value;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

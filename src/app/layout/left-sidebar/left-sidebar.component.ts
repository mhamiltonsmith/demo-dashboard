import { Component, OnInit }   from '@angular/core';
import { ActivatedRoute }      from '@angular/router';
import { IntakeOfficeService } from '../../intake-office/intake-office.service';
import { LayoutService }       from '../layout.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: [
    '../../../assets/lib/material-design-icons/css/material-design-iconic-font.min.css',
    '../../app.component.css'
  ]
})
export class LeftSidebarComponent implements OnInit {

  sub:          any;
  office_names: string[];
  title:        string;

  constructor( private intakeOfficeService: IntakeOfficeService, private layoutService: LayoutService, public route: ActivatedRoute ) { }

  ngOnInit() {
    this.office_names = this.intakeOfficeService.getOfficeNames();
    this.sub = this.layoutService.getTitle().subscribe(title => {
      this.title = title.value;
    });
  }

}

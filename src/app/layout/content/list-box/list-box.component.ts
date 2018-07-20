import { Component, OnInit }   from '@angular/core';
import { IntakeOfficeService } from '../../../intake-office/intake-office.service';
import { Router }              from '@angular/router';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  office_names: string[];

  goToOffice(office_name) {
    this.router.navigate(['./network', office_name.toLowerCase()]);
  }

  constructor( private intakeOfficeService: IntakeOfficeService, private router: Router ) { }

  ngOnInit() {
    this.office_names = this.intakeOfficeService.getOfficeNames();
  }

}

import { Injectable } from '@angular/core';
import { IntakeOffice } from './IntakeOffice';
import { intake_offices } from './intake-offices';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getIntakeOffice(id: number): IntakeOffice {
    for (var office in intake_offices) {
      if (intake_offices[office].id == id) {
        return intake_offices[office];
      }
    }
  }

  

  constructor() { }
}

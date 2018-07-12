import { Injectable }          from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IntakeOffice }        from './IntakeOffice';
import { intake_offices }      from './intake-offices';

@Injectable({
  providedIn: 'root'
})
export class IntakeOfficeService {

  private subject = new Subject<any>();

  getOffice(name: string): IntakeOffice {
    for (var i in intake_offices) {
      if (intake_offices[i].name.toLowerCase() == name) {
        return intake_offices[i];
      }
    }
  }

  getOfficeNames(): string[] {
    var office_names: string[] = [];
    for (var i in intake_offices) {
      office_names.push(intake_offices[i].name);
    }
    return office_names;
  }

  getOffices(): IntakeOffice[] {
    var offices: IntakeOffice[] = [];
    for (var i in intake_offices) {
      offices.push(intake_offices[i]);
    }
    return offices;
  }

    sendTitle(title: string) {
        this.subject.next({ value: title });
    }

    getTitle(): Observable<any> {
        return this.subject.asObservable();
    }

  constructor() { }
}

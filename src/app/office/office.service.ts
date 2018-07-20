import { Injectable }          from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Office }              from './Office';
import { offices }             from './offices';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private subject = new Subject<any>();

  getOffice(name: string): Office {
    for (var i in offices) {
      if (offices[i].name.toLowerCase() == name) {
        return offices[i];
      }
    }
  }

  getOfficeNames(): string[] {
    var office_names: string[] = [];
    for (var i in offices) {
      office_names.push(offices[i].name);
    }
    return office_names;
  }

  getOffices(): Office[] {
    var offices_array: Office[] = [];
    for (var i in offices) {
      offices_array.push(offices[i]);
    }
    return offices_array;
  }

  constructor() { }
}

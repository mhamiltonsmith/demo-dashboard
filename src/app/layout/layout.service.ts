import { Injectable }          from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private subject = new Subject<any>();

  updateTitle(title: string) {
      this.subject.next({ value: title });
  }
  getTitle(): Observable<any> {
      return this.subject.asObservable();
  }

  constructor() { }
}

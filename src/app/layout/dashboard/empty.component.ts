import { Component, OnInit, ChangeDetectorRef, OnChanges, Input } from '@angular/core';

declare var App: any;

@Component({
  selector: 'app-empty',
  template: '',
  styleUrls: [
  ]
})

export class EmptyComponent implements OnInit, OnChanges {

  @Input() office_id: number;

  constructor( ) { }

  ngOnInit() { }

  ngOnChanges() {
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrows-widget',
  templateUrl: './arrows-widget.component.html',
  styleUrls: ['./arrows-widget.component.css']
})

export class ArrowsWidgetComponent implements OnInit {

  @Input() directionUp: boolean;

  constructor() { }

  ngOnInit() {
  }

}

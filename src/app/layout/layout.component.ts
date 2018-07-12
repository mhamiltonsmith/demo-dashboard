import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['../app.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private sub:     any;
  public  title:   string ;

  constructor( private renderer: Renderer2 ) { 
    this.renderer.addClass(document.body, 'be-animate');
  }

  ngOnInit() {
    App.init();
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'be-animate');
  }
}

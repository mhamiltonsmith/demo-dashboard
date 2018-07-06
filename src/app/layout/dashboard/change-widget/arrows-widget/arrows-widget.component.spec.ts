import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsWidgetComponent } from './arrows-widget.component';

describe('ArrowsWidgetComponent', () => {
  let component: ArrowsWidgetComponent;
  let fixture: ComponentFixture<ArrowsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

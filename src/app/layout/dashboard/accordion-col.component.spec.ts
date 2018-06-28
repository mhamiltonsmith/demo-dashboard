import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionColComponent } from './accordion-col.component';

describe('AccordionColComponent', () => {
  let component: AccordionColComponent;
  let fixture: ComponentFixture<AccordionColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

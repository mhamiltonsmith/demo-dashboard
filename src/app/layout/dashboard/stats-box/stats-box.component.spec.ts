import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatColComponent } from './stat-col.component';

describe('StatColComponent', () => {
  let component: StatColComponent;
  let fixture: ComponentFixture<StatColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

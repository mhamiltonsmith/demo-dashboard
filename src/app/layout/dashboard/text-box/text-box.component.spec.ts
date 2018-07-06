import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextColComponent } from './text-col.component';

describe('TextColComponent', () => {
  let component: TextColComponent;
  let fixture: ComponentFixture<TextColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

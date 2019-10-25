import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineMonthComponent } from './tontine-month.component';

describe('TontineMonthComponent', () => {
  let component: TontineMonthComponent;
  let fixture: ComponentFixture<TontineMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TontineMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

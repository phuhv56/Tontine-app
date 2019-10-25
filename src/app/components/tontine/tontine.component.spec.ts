import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineComponent } from './tontine.component';

describe('TontineComponent', () => {
  let component: TontineComponent;
  let fixture: ComponentFixture<TontineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TontineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

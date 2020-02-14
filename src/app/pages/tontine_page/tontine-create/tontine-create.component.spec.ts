import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineCreateComponent } from './tontine-create.component';

describe('TontineCreateComponent', () => {
  let component: TontineCreateComponent;
  let fixture: ComponentFixture<TontineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TontineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

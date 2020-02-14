import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialogComponent } from './add-user-dialog.component';
import {TableModule} from 'primeng/table';
import {SimpleChange} from '@angular/core';

describe('AddUserDialogComponent', () => {
  let component: AddUserDialogComponent;
  let fixture: ComponentFixture<AddUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserDialogComponent ],
      imports: [TableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.ngOnChanges({change: new SimpleChange(null, null, false)});
  });
});

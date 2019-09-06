import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeDialogComponent } from './new-employee-dialog.component';

describe('NewEmployeeDialogComponent', () => {
  let component: NewEmployeeDialogComponent;
  let fixture: ComponentFixture<NewEmployeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

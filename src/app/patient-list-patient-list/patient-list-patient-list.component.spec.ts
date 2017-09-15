import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListPatientListComponent } from './patient-list-patient-list.component';

describe('PatientListPatientListComponent', () => {
  let component: PatientListPatientListComponent;
  let fixture: ComponentFixture<PatientListPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

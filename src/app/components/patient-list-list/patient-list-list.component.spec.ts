import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListListComponent } from './patient-list-list.component';

describe('PatientListListComponent', () => {
  let component: PatientListListComponent;
  let fixture: ComponentFixture<PatientListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

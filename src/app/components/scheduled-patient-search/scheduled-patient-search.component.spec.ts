import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPatientSearchComponent } from './scheduled-patient-search.component';

describe('ScheduledPatientSearchComponent', () => {
  let component: ScheduledPatientSearchComponent;
  let fixture: ComponentFixture<ScheduledPatientSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledPatientSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledPatientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

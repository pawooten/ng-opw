import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPatientSearchResultsListComponent } from './scheduled-patient-search-results-list.component';

describe('ScheduledPatientSearchResultsListComponent', () => {
  let component: ScheduledPatientSearchResultsListComponent;
  let fixture: ComponentFixture<ScheduledPatientSearchResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledPatientSearchResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledPatientSearchResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

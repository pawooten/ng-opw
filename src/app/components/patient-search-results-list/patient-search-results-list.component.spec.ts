import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchResultsListComponent } from './patient-search-results-list.component';

describe('PatientSearchResultsListComponent', () => {
  let component: PatientSearchResultsListComponent;
  let fixture: ComponentFixture<PatientSearchResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSearchResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

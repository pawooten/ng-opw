import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPatientSearchPanelComponent } from './scheduled-patient-search-panel.component';

describe('ScheduledPatientSearchPanelComponent', () => {
  let component: ScheduledPatientSearchPanelComponent;
  let fixture: ComponentFixture<ScheduledPatientSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledPatientSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledPatientSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

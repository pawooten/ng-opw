import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewerTabsComponent } from './patient-viewer-tabs.component';

describe('PatientViewerTabsComponent', () => {
  let component: PatientViewerTabsComponent;
  let fixture: ComponentFixture<PatientViewerTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewerTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

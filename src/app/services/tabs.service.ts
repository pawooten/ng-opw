import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PatientViewerTab } from './patient-viewer-tab';

@Injectable()
export class TabsService {

  private tabs: PatientViewerTab[] = [];

  private initialTabs: PatientViewerTab[] = [
    new PatientViewerTab( 'Tab Number One', 100, 'bisque', 'black' ),
    new PatientViewerTab( 'Tab Number Two', 10, 'aqua', 'black' ),
    new PatientViewerTab( 'Tab Number Three', 1, 'teal', 'black' ),
    new PatientViewerTab( 'Tab Number Four', 10, 'lemonchiffon', 'black' ),
    new PatientViewerTab( 'Tab Number Five', 100, 'aliceblue', 'black' ),
    new PatientViewerTab( 'Tab Number Six', 10, 'coral', 'black' ),
    new PatientViewerTab( 'Long named tab 0123456789 0123456789 0123456789', 10, 'lemonchiffon', 'black' ),
    new PatientViewerTab( 'Other', 100, 'goldenrod', 'black' ),
    new PatientViewerTab( 'All', 100, 'aliceblue', 'black' )
  ];

  private extraTabs: PatientViewerTab[] = [
    new PatientViewerTab( 'Case Number One', 100, 'bisque', 'black' ),
    new PatientViewerTab( 'Case Number Two', 10, 'aqua', 'black' ),
    new PatientViewerTab( 'Case Number Three', 1, 'teal', 'black' ),
    new PatientViewerTab( 'Case Number Four', 10, 'lemonchiffon', 'black' ),
    new PatientViewerTab( 'Case Number Five', 100, 'aliceblue', 'black' ),
    new PatientViewerTab( 'Case Number Six', 10, 'coral', 'black' ),
    new PatientViewerTab( 'Case Number Seven', 100, 'bisque', 'black' ),
    new PatientViewerTab( 'Case Number Eight', 10, 'aqua', 'black' ),
    new PatientViewerTab( 'Case Number Nine', 1, 'teal', 'black' ),
    new PatientViewerTab( 'Case Number Ten', 10, 'lemonchiffon', 'black' ),
    new PatientViewerTab( 'Case Number Eleven', 100, 'aliceblue', 'black' ),
    new PatientViewerTab( 'Case Number Twelve', 10, 'coral', 'black' ),
    new PatientViewerTab( 'New', 10, 'red', 'black' )
  ];

  private observableTabs: Observable<Array<PatientViewerTab>>;

  constructor() {
    this.tabs = this.initialTabs;

    this.observableTabs = new Observable( observer => {
      setTimeout(() => {
        observer.next( this.tabs );
      }, 500);
    });
  }

  getTabs(): Observable<Array<PatientViewerTab>> {
    return this.observableTabs;
  }

  // TODO remove, temporary
  refresh() {
    this.tabs = [...this.initialTabs, ...this.extraTabs];
  }
}

import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { PatientViewerTab } from './patient-viewer-tab';

@Injectable()
export class TabsService {

  private tabs: PatientViewerTab[] = new Array<PatientViewerTab>();

  constructor() {
    this.tabs.push( new PatientViewerTab( 'Tab Number One', 100, 'bisque', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Tab Number Two', 10, 'aqua', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Tab Number Three', 1, 'teal', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Tab Number Four', 10, 'lemonchiffon', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Tab Number Five', 100, 'aliceblue', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Tab Number Six', 10, 'coral', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Long named tab 0123456789 0123456789 0123456789', 10, 'lemonchiffon', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Other', 100, 'goldenrod', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'All', 100, 'aliceblue', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number One', 100, 'bisque', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Two', 10, 'aqua', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Three', 1, 'teal', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Four', 10, 'lemonchiffon', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Five', 100, 'aliceblue', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Six', 10, 'coral', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Seven', 100, 'bisque', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Eight', 10, 'aqua', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Nine', 1, 'teal', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Ten', 10, 'lemonchiffon', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Eleven', 100, 'aliceblue', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'Case Number Twelve', 10, 'coral', 'black' ) );
    this.tabs.push( new PatientViewerTab( 'New', 10, 'red', 'black' ) );
   }

  getTabs(): Array<PatientViewerTab> {
    return this.tabs;
  }
}

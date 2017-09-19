import { Component, OnInit } from '@angular/core';

import { PatientViewerTab } from './patient-viewer-tab';

import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-patient-viewer-tabs',
  templateUrl: './patient-viewer-tabs.component.html',
  styleUrls: ['./patient-viewer-tabs.component.css']
})
export class PatientViewerTabsComponent implements OnInit {

  public Tabs: Array<PatientViewerTab> = new Array<PatientViewerTab>();

  public ShowTabCounts: boolean;

  constructor( configurationService: ConfigurationService ) {
    this.Tabs.push( new PatientViewerTab( 'Tab Number One', 100, 'bisque', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Tab Number Two', 10, 'aqua', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Tab Number Three', 1, 'teal', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Tab Number Four', 10, 'lemonchiffon', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Tab Number Five', 100, 'aliceblue', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Tab Number Six', 10, 'coral', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Long named tab 0123456789 0123456789 0123456789', 10, 'lemonchiffon', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Other', 100, 'goldenrod', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'All', 100, 'aliceblue', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number One', 100, 'bisque', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Two', 10, 'aqua', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Three', 1, 'teal', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Four', 10, 'lemonchiffon', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Five', 100, 'aliceblue', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Six', 10, 'coral', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Seven', 100, 'bisque', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Eight', 10, 'aqua', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Nine', 1, 'teal', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Ten', 10, 'lemonchiffon', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Eleven', 100, 'aliceblue', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'Case Number Twelve', 10, 'coral', 'black' ) );
    this.Tabs.push( new PatientViewerTab( 'New', 10, 'red', 'black' ) );

    this.ShowTabCounts = configurationService.showTabCounts;
   }

  ngOnInit() {
  }

}

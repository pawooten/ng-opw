import { Component, OnInit } from '@angular/core';

import { PatientViewerTab } from '../../services/patient-viewer-tab';
import { TabsService } from '../../services/tabs.service';

import { ConfigurationService } from '../../core-module/services/configuration.service';

@Component({
  selector: 'app-patient-viewer-tabs',
  templateUrl: './patient-viewer-tabs.component.html',
  styleUrls: ['./patient-viewer-tabs.component.css']
})
export class PatientViewerTabsComponent implements OnInit {

  public Tabs: Array<PatientViewerTab>;

  public ShowTabCounts: boolean;

  constructor( configurationService: ConfigurationService, tabsService: TabsService ) {
    this.ShowTabCounts = configurationService.showTabCounts;
    this.Tabs = tabsService.getTabs();
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PatientViewerTab } from '../../services/patient-viewer-tab';
import { TabsService } from '../../services/tabs.service';

import { ConfigurationService } from '../../core-module/services/configuration.service';

@Component({
  selector: 'app-patient-viewer-tabs',
  templateUrl: './patient-viewer-tabs.component.html',
  styleUrls: ['./patient-viewer-tabs.component.css']
})
export class PatientViewerTabsComponent implements OnInit {

  public Tabs: Array<PatientViewerTab> = new Array<PatientViewerTab>();

  public ShowTabCounts: boolean;

  constructor( configurationService: ConfigurationService, private tabsService: TabsService ) {
    this.ShowTabCounts = configurationService.showTabCounts;
    this.tabsService.getTabs().subscribe(
      tabs => this.Tabs = tabs
    );
   }

  ngOnInit() {
  }

  onRefreshTabsClicked() {
    this.tabsService.refresh();
    this.tabsService.getTabs().subscribe(
      tabs => this.Tabs = tabs
    );
  }
}

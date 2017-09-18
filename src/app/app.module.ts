import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientSearchPanelComponent } from './patient-search-panel/patient-search-panel.component';
import { PatientSearchResultsListComponent } from './patient-search-results-list/patient-search-results-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { ChartSearchComponent } from './chart-search/chart-search.component';
import { ChartSearchPanelComponent } from './chart-search-panel/chart-search-panel.component';
import { ChartSearchResultsListComponent } from './chart-search-results-list/chart-search-results-list.component';
import { ScheduledPatientSearchComponent } from './scheduled-patient-search/scheduled-patient-search.component';
import { ScheduledPatientSearchPanelComponent } from './scheduled-patient-search-panel/scheduled-patient-search-panel.component';
import { ScheduledPatientSearchResultsListComponent } from './scheduled-patient-search-results-list/scheduled-patient-search-results-list.component';

import { appRoutes } from './app.route-definitions';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientListListComponent } from './patient-list-list/patient-list-list.component';
import { PatientListPatientListComponent } from './patient-list-patient-list/patient-list-patient-list.component';
import { PatientViewerComponent } from './patient-viewer/patient-viewer.component';
import { PatientViewerTabsComponent } from './patient-viewer-tabs/patient-viewer-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientSearchPanelComponent,
    PatientSearchResultsListComponent,
    ToolbarComponent,
    ChartSearchComponent,
    ChartSearchPanelComponent,
    ChartSearchResultsListComponent,
    ScheduledPatientSearchComponent,
    ScheduledPatientSearchPanelComponent,
    ScheduledPatientSearchResultsListComponent,
    PatientListComponent,
    PatientListListComponent,
    PatientListPatientListComponent,
    PatientViewerComponent,
    PatientViewerTabsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

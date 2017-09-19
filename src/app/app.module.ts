import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { PatientSearchPanelComponent } from './components/patient-search-panel/patient-search-panel.component';
import { PatientSearchResultsListComponent } from './components/patient-search-results-list/patient-search-results-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { ChartSearchComponent } from './components/chart-search/chart-search.component';
import { ChartSearchPanelComponent } from './components/chart-search-panel/chart-search-panel.component';
import { ChartSearchResultsListComponent } from './components/chart-search-results-list/chart-search-results-list.component';
import { ScheduledPatientSearchComponent } from './components/scheduled-patient-search/scheduled-patient-search.component';
import { ScheduledPatientSearchPanelComponent } from './components/scheduled-patient-search-panel/scheduled-patient-search-panel.component';
import { ScheduledPatientSearchResultsListComponent } from './components/scheduled-patient-search-results-list/scheduled-patient-search-results-list.component';

import { appRoutes } from './app.route-definitions';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientListListComponent } from './components/patient-list-list/patient-list-list.component';
import { PatientListPatientListComponent } from './components/patient-list-patient-list/patient-list-patient-list.component';
import { PatientViewerComponent } from './components/patient-viewer/patient-viewer.component';
import { PatientViewerTabsComponent } from './components/patient-viewer-tabs/patient-viewer-tabs.component';

import { CoreModule } from './core-module/core.module';

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
    CoreModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientSearchPanelComponent } from './patient-search-panel/patient-search-panel.component';
import { PatientSearchResultsListComponent } from './patient-search-results-list/patient-search-results-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartSearchComponent } from './chart-search/chart-search.component';
import { ChartSearchPanelComponent } from './chart-search-panel/chart-search-panel.component';
import { ChartSearchResultsListComponent } from './chart-search-results-list/chart-search-results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientSearchPanelComponent,
    PatientSearchResultsListComponent,
    ToolbarComponent,
    ChartSearchComponent,
    ChartSearchPanelComponent,
    ChartSearchResultsListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

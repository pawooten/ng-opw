import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientSearchPanelComponent } from './patient-search-panel/patient-search-panel.component';
import { PatientSearchResultsListComponent } from './patient-search-results-list/patient-search-results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientSearchPanelComponent,
    PatientSearchResultsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

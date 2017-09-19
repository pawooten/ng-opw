import { Routes } from '@angular/router';

import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { ChartSearchComponent } from './components/chart-search/chart-search.component';
import { ScheduledPatientSearchComponent } from './components/scheduled-patient-search/scheduled-patient-search.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientViewerComponent } from './components/patient-viewer/patient-viewer.component';

export const appRoutes: Routes = [
      { path: '', component: PatientViewerComponent },
      { path: 'chartSearch', component: ChartSearchComponent },
      { path: 'patientSearch', component: PatientSearchComponent },
      { path: 'scheduledPatientSearch', component: ScheduledPatientSearchComponent },
      { path: 'patientList', component: PatientListComponent }
];

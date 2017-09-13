import { Routes } from '@angular/router';

import { PatientSearchComponent } from './patient-search/patient-search.component';
import { ChartSearchComponent } from './chart-search/chart-search.component';
import { ScheduledPatientSearchComponent } from './scheduled-patient-search/scheduled-patient-search.component';

export const appRoutes: Routes = [
      { path: '', component: PatientSearchComponent },
      { path: 'chartSearch', component: ChartSearchComponent },
      { path: 'patientSearch', component: PatientSearchComponent },
      { path: 'scheduledPatientSearch', component: ScheduledPatientSearchComponent }
];

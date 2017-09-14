import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { LayoutType } from '../app.enumerations';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private selectedLayout: LayoutType = LayoutType.ChartSearch;

  // Is it necessary to declare these boolean members, or can I specify expressions in my conditional
  // class binding?
  private isChartSearch = false;
  private isPatientSearch = true;
  private isScheduledPatientSearch = false;

  constructor(private _router: Router ) {
    _router.events.subscribe( eventValue => {
      if ( eventValue instanceof NavigationEnd ) {
        console.log('Navigation complete!');
        console.log(eventValue.url);
      } else {
        console.log('Some other event!');
      }
    });
  }

  ngOnInit() {
  }

  onChartSearchClicked() {
    console.log('chart search clicked');
    this._router.navigate(['chartSearch']);
  }

  onPatientSearchClicked() {
    console.log('patient search clicked');
    this._router.navigate(['patientSearch']);
  }

  onScheduledPatientSearchClicked() {
    console.log('scheduled patient search clicked');
    this._router.navigate(['scheduledPatientSearch']);
  }
}

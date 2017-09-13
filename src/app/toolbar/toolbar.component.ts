import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private _router: Router ) { }

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

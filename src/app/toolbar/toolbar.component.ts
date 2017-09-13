import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChartSearchClicked()
  {
    console.log('chart search clicked');
  }

  onPatientSearchClicked()
  {
    console.log('patient search clicked');
  }

  onScheduledPatientSearchClicked()
  {
    console.log('scheduled patient search clicked');
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSearchResultsListComponent } from './chart-search-results-list.component';

describe('ChartSearchResultsListComponent', () => {
  let component: ChartSearchResultsListComponent;
  let fixture: ComponentFixture<ChartSearchResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSearchResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSearchResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

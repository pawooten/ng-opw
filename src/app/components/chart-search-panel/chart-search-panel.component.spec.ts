import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSearchPanelComponent } from './chart-search-panel.component';

describe('ChartSearchPanelComponent', () => {
  let component: ChartSearchPanelComponent;
  let fixture: ComponentFixture<ChartSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

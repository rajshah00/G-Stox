import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTradeReportComponent } from './equity-trade-report.component';

describe('EquityTradeReportComponent', () => {
  let component: EquityTradeReportComponent;
  let fixture: ComponentFixture<EquityTradeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityTradeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityTradeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

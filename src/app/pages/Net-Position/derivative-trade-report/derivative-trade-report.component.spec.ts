import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeTradeReportComponent } from './derivative-trade-report.component';

describe('DerivativeTradeReportComponent', () => {
  let component: DerivativeTradeReportComponent;
  let fixture: ComponentFixture<DerivativeTradeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativeTradeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivativeTradeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

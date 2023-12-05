import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRePledgeReportComponent } from './exchange-re-pledge-report.component';

describe('ExchangeRePledgeReportComponent', () => {
  let component: ExchangeRePledgeReportComponent;
  let fixture: ComponentFixture<ExchangeRePledgeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRePledgeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRePledgeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

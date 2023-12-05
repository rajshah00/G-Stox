import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityPAndLReportComponent } from './equity-p-and-l-report.component';

describe('EquityPAndLReportComponent', () => {
  let component: EquityPAndLReportComponent;
  let fixture: ComponentFixture<EquityPAndLReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityPAndLReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityPAndLReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

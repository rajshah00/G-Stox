import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativePAndLReportComponent } from './derivative-p-and-l-report.component';

describe('DerivativePAndLReportComponent', () => {
  let component: DerivativePAndLReportComponent;
  let fixture: ComponentFixture<DerivativePAndLReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativePAndLReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivativePAndLReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

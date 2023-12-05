import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityBillsSummaryComponent } from './equity-bills-summary.component';

describe('EquityBillsSummaryComponent', () => {
  let component: EquityBillsSummaryComponent;
  let fixture: ComponentFixture<EquityBillsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityBillsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityBillsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

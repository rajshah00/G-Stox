import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTransactionLedgerComponent } from './equity-transaction-ledger.component';

describe('EquityTransactionLedgerComponent', () => {
  let component: EquityTransactionLedgerComponent;
  let fixture: ComponentFixture<EquityTransactionLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityTransactionLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityTransactionLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

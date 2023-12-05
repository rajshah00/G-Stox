import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTradeConfimationComponent } from './equity-trade-confimation.component';

describe('EquityTradeConfimationComponent', () => {
  let component: EquityTradeConfimationComponent;
  let fixture: ComponentFixture<EquityTradeConfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityTradeConfimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityTradeConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

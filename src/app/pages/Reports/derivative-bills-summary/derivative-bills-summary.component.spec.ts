import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeBillsSummaryComponent } from './derivative-bills-summary.component';

describe('DerivativeBillsSummaryComponent', () => {
  let component: DerivativeBillsSummaryComponent;
  let fixture: ComponentFixture<DerivativeBillsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativeBillsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivativeBillsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

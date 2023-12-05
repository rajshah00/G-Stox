import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativePAndLStatementComponent } from './derivative-p-and-l-statement.component';

describe('DerivativePAndLStatementComponent', () => {
  let component: DerivativePAndLStatementComponent;
  let fixture: ComponentFixture<DerivativePAndLStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativePAndLStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivativePAndLStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

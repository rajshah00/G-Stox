import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpHoldingComponent } from './dp-holding.component';

describe('DpHoldingComponent', () => {
  let component: DpHoldingComponent;
  let fixture: ComponentFixture<DpHoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpHoldingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpHoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

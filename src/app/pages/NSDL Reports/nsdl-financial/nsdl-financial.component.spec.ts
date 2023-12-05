import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSDLFinancialComponent } from './nsdl-financial.component';

describe('NSDLFinancialComponent', () => {
  let component: NSDLFinancialComponent;
  let fixture: ComponentFixture<NSDLFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSDLFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NSDLFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

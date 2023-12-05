import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSDLHoldingComponent } from './nsdl-holding.component';

describe('NSDLHoldingComponent', () => {
  let component: NSDLHoldingComponent;
  let fixture: ComponentFixture<NSDLHoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSDLHoldingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NSDLHoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

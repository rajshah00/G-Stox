import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPositionDerivativeComponent } from './net-position-derivative.component';

describe('NetPositionDerivativeComponent', () => {
  let component: NetPositionDerivativeComponent;
  let fixture: ComponentFixture<NetPositionDerivativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetPositionDerivativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetPositionDerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

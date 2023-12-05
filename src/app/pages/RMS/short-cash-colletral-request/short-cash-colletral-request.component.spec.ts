import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCashColletralRequestComponent } from './short-cash-colletral-request.component';

describe('ShortCashColletralRequestComponent', () => {
  let component: ShortCashColletralRequestComponent;
  let fixture: ComponentFixture<ShortCashColletralRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortCashColletralRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortCashColletralRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

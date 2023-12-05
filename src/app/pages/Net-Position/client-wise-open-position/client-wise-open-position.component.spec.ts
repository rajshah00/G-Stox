import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWiseOpenPositionComponent } from './client-wise-open-position.component';

describe('ClientWiseOpenPositionComponent', () => {
  let component: ClientWiseOpenPositionComponent;
  let fixture: ComponentFixture<ClientWiseOpenPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWiseOpenPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWiseOpenPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

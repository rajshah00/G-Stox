import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACHRequestComponent } from './achrequest.component';

describe('ACHRequestComponent', () => {
  let component: ACHRequestComponent;
  let fixture: ComponentFixture<ACHRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACHRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACHRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgtsComponent } from './agts.component';

describe('AgtsComponent', () => {
  let component: AgtsComponent;
  let fixture: ComponentFixture<AgtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

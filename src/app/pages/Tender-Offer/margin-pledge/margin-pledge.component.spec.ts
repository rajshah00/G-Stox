import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginPledgeComponent } from './margin-pledge.component';

describe('MarginPledgeComponent', () => {
  let component: MarginPledgeComponent;
  let fixture: ComponentFixture<MarginPledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginPledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginPledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

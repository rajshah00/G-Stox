import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioPositionComponent } from './profolio-position.component';

describe('ProfolioPositionComponent', () => {
  let component: ProfolioPositionComponent;
  let fixture: ComponentFixture<ProfolioPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolioPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfolioPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtfDetailStatementComponent } from './mtf-detail-statement.component';

describe('MtfDetailStatementComponent', () => {
  let component: MtfDetailStatementComponent;
  let fixture: ComponentFixture<MtfDetailStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtfDetailStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtfDetailStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

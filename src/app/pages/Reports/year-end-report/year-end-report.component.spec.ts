import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEndReportComponent } from './year-end-report.component';

describe('YearEndReportComponent', () => {
  let component: YearEndReportComponent;
  let fixture: ComponentFixture<YearEndReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearEndReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearEndReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

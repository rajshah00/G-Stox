import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAppComponent } from './add-new-app.component';

describe('AddNewAppComponent', () => {
  let component: AddNewAppComponent;
  let fixture: ComponentFixture<AddNewAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

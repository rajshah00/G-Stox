import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractNoteComponent } from './contract-note.component';

describe('ContractNoteComponent', () => {
  let component: ContractNoteComponent;
  let fixture: ComponentFixture<ContractNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCModificationRequestLetterComponent } from './kycmodification-request-letter.component';

describe('KYCModificationRequestLetterComponent', () => {
  let component: KYCModificationRequestLetterComponent;
  let fixture: ComponentFixture<KYCModificationRequestLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KYCModificationRequestLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KYCModificationRequestLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

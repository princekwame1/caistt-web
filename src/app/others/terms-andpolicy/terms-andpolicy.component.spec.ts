import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndpolicyComponent } from './terms-andpolicy.component';

describe('TermsAndpolicyComponent', () => {
  let component: TermsAndpolicyComponent;
  let fixture: ComponentFixture<TermsAndpolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndpolicyComponent]
    });
    fixture = TestBed.createComponent(TermsAndpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

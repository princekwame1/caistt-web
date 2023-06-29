import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBusinessComponent } from './single-business.component';

describe('SingleBusinessComponent', () => {
  let component: SingleBusinessComponent;
  let fixture: ComponentFixture<SingleBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBusinessComponent]
    });
    fixture = TestBed.createComponent(SingleBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

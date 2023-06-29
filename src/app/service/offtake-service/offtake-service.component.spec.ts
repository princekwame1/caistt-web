import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfftakeServiceComponent } from './offtake-service.component';

describe('OfftakeServiceComponent', () => {
  let component: OfftakeServiceComponent;
  let fixture: ComponentFixture<OfftakeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfftakeServiceComponent]
    });
    fixture = TestBed.createComponent(OfftakeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

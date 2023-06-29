import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriTechComponent } from './agri-tech.component';

describe('AgriTechComponent', () => {
  let component: AgriTechComponent;
  let fixture: ComponentFixture<AgriTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgriTechComponent]
    });
    fixture = TestBed.createComponent(AgriTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

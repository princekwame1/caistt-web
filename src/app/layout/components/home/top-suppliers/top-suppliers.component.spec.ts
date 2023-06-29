import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSuppliersComponent } from './top-suppliers.component';

describe('TopSuppliersComponent', () => {
  let component: TopSuppliersComponent;
  let fixture: ComponentFixture<TopSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSuppliersComponent]
    });
    fixture = TestBed.createComponent(TopSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterTradeComponent } from './inter-trade.component';

describe('InterTradeComponent', () => {
  let component: InterTradeComponent;
  let fixture: ComponentFixture<InterTradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterTradeComponent]
    });
    fixture = TestBed.createComponent(InterTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersKitchenComponent } from './view-orders-kitchen.component';

describe('ViewOrdersKitchenComponent', () => {
  let component: ViewOrdersKitchenComponent;
  let fixture: ComponentFixture<ViewOrdersKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsForPickupWaiterComponent } from './view-items-for-pickup-waiter.component';

describe('ViewItemsForPickupWaiterComponent', () => {
  let component: ViewItemsForPickupWaiterComponent;
  let fixture: ComponentFixture<ViewItemsForPickupWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemsForPickupWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsForPickupWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

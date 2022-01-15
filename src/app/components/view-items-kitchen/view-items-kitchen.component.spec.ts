import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsKitchenComponent } from './view-items-kitchen.component';

describe('ViewItemsKitchenComponent', () => {
  let component: ViewItemsKitchenComponent;
  let fixture: ComponentFixture<ViewItemsKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemsKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

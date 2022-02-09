import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWaiterNotificationComponent } from './request-waiter-notification.component';

describe('RequestWaiterNotificationComponent', () => {
  let component: RequestWaiterNotificationComponent;
  let fixture: ComponentFixture<RequestWaiterNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWaiterNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWaiterNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

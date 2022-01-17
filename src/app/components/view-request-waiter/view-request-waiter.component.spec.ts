import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestWaiterComponent } from './view-request-waiter.component';

describe('ViewRequestWaiterComponent', () => {
  let component: ViewRequestWaiterComponent;
  let fixture: ComponentFixture<ViewRequestWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequestWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

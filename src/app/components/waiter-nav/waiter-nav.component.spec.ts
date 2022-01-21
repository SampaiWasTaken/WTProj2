import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterNavComponent } from './waiter-nav.component';

describe('WaiterNavComponent', () => {
  let component: WaiterNavComponent;
  let fixture: ComponentFixture<WaiterNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

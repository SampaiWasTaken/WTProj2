import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenNavComponent } from './kitchen-nav.component';

describe('KitchenNavComponent', () => {
  let component: KitchenNavComponent;
  let fixture: ComponentFixture<KitchenNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

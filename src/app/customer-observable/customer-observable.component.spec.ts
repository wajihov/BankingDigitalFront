import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerObservableComponent } from './customer-observable.component';

describe('CustomerObservableComponent', () => {
  let component: CustomerObservableComponent;
  let fixture: ComponentFixture<CustomerObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

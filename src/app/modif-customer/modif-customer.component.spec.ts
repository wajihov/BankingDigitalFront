import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCustomerComponent } from './modif-customer.component';

describe('ModifCustomerComponent', () => {
  let component: ModifCustomerComponent;
  let fixture: ComponentFixture<ModifCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

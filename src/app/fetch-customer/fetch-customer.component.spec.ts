import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCustomerComponent } from './fetch-customer.component';

describe('FetchCustomerComponent', () => {
  let component: FetchCustomerComponent;
  let fixture: ComponentFixture<FetchCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

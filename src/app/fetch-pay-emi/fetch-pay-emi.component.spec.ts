import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPayEmiComponent } from './fetch-pay-emi.component';

describe('FetchPayEmiComponent', () => {
  let component: FetchPayEmiComponent;
  let fixture: ComponentFixture<FetchPayEmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchPayEmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchPayEmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

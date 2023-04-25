import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoanPlanComponent } from './edit-loan-plan.component';

describe('EditLoanPlanComponent', () => {
  let component: EditLoanPlanComponent;
  let fixture: ComponentFixture<EditLoanPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoanPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLoanPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

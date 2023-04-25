import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmiplanComponent } from './create-emiplan.component';

describe('CreateEmiplanComponent', () => {
  let component: CreateEmiplanComponent;
  let fixture: ComponentFixture<CreateEmiplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmiplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmiplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

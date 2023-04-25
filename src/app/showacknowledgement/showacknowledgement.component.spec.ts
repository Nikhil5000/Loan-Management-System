import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowacknowledgementComponent } from './showacknowledgement.component';

describe('ShowacknowledgementComponent', () => {
  let component: ShowacknowledgementComponent;
  let fixture: ComponentFixture<ShowacknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowacknowledgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowacknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

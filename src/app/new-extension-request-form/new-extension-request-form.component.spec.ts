import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExtensionRequestFormComponent } from './new-extension-request-form.component';

describe('NewExtensionRequestFormComponent', () => {
  let component: NewExtensionRequestFormComponent;
  let fixture: ComponentFixture<NewExtensionRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExtensionRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExtensionRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

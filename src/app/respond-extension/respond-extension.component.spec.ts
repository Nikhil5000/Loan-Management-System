import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondExtensionComponent } from './respond-extension.component';

describe('RespondExtensionComponent', () => {
  let component: RespondExtensionComponent;
  let fixture: ComponentFixture<RespondExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

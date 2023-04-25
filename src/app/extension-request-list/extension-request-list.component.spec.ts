import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionRequestListComponent } from './extension-request-list.component';

describe('ExtensionRequestListComponent', () => {
  let component: ExtensionRequestListComponent;
  let fixture: ComponentFixture<ExtensionRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

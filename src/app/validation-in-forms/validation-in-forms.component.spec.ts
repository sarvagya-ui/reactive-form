import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationInFormsComponent } from './validation-in-forms.component';

describe('ValidationInFormsComponent', () => {
  let component: ValidationInFormsComponent;
  let fixture: ComponentFixture<ValidationInFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationInFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationInFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

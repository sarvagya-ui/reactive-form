import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyAddFormControlComponent } from './dynamically-add-form-control.component';

describe('DynamicallyAddFormControlComponent', () => {
  let component: DynamicallyAddFormControlComponent;
  let fixture: ComponentFixture<DynamicallyAddFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyAddFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyAddFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

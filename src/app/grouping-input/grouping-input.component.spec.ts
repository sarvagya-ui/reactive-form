import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingInputComponent } from './grouping-input.component';

describe('GroupingInputComponent', () => {
  let component: GroupingInputComponent;
  let fixture: ComponentFixture<GroupingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

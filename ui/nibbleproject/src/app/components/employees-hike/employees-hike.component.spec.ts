import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesHikeComponent } from './employees-hike.component';

describe('EmployeesHikeComponent', () => {
  let component: EmployeesHikeComponent;
  let fixture: ComponentFixture<EmployeesHikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesHikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

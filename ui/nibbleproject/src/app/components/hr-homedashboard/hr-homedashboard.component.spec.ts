import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHomedashboardComponent } from './hr-homedashboard.component';

describe('HrHomedashboardComponent', () => {
  let component: HrHomedashboardComponent;
  let fixture: ComponentFixture<HrHomedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrHomedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHomedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

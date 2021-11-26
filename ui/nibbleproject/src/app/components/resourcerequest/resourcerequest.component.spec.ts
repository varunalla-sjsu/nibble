import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcerequestComponent } from './resourcerequest.component';

describe('ResourcerequestComponent', () => {
  let component: ResourcerequestComponent;
  let fixture: ComponentFixture<ResourcerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcerequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

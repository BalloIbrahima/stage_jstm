import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuScienceInternationaleComponent } from './actu-science-internationale.component';

describe('ActuScienceInternationaleComponent', () => {
  let component: ActuScienceInternationaleComponent;
  let fixture: ComponentFixture<ActuScienceInternationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuScienceInternationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuScienceInternationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

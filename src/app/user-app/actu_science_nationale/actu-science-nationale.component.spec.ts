import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuScienceNationaleComponent } from './actu-science-nationale.component';

describe('ActuScienceNationaleComponent', () => {
  let component: ActuScienceNationaleComponent;
  let fixture: ComponentFixture<ActuScienceNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuScienceNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuScienceNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

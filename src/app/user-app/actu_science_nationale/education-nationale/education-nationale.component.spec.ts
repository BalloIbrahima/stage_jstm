import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationNationaleComponent } from './education-nationale.component';

describe('EducationNationaleComponent', () => {
  let component: EducationNationaleComponent;
  let fixture: ComponentFixture<EducationNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

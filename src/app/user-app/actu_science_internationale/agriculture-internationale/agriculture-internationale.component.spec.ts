import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureInternationaleComponent } from './agriculture-internationale.component';

describe('AgricultureInternationaleComponent', () => {
  let component: AgricultureInternationaleComponent;
  let fixture: ComponentFixture<AgricultureInternationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgricultureInternationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureInternationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

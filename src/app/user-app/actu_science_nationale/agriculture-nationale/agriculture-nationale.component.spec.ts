import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureNationaleComponent } from './agriculture-nationale.component';

describe('AgricultureNationaleComponent', () => {
  let component: AgricultureNationaleComponent;
  let fixture: ComponentFixture<AgricultureNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgricultureNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

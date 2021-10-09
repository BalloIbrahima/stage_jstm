import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationInternationaleComponent } from './innovation-internationale.component';

describe('InnovationInternationaleComponent', () => {
  let component: InnovationInternationaleComponent;
  let fixture: ComponentFixture<InnovationInternationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationInternationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationInternationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieNationaleComponent } from './technologie-nationale.component';

describe('TechnologieNationaleComponent', () => {
  let component: TechnologieNationaleComponent;
  let fixture: ComponentFixture<TechnologieNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologieNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologieNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesMagasinesComponent } from './mes-magasines.component';

describe('MesMagasinesComponent', () => {
  let component: MesMagasinesComponent;
  let fixture: ComponentFixture<MesMagasinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesMagasinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesMagasinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

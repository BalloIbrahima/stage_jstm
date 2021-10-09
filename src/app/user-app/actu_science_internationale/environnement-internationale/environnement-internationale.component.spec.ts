import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironnementInternationaleComponent } from './environnement-internationale.component';

describe('EnvironnementInternationaleComponent', () => {
  let component: EnvironnementInternationaleComponent;
  let fixture: ComponentFixture<EnvironnementInternationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironnementInternationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironnementInternationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

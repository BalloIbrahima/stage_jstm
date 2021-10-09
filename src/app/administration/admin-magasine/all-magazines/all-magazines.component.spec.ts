import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMagazinesComponent } from './all-magazines.component';

describe('AllMagazinesComponent', () => {
  let component: AllMagazinesComponent;
  let fixture: ComponentFixture<AllMagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMagazinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

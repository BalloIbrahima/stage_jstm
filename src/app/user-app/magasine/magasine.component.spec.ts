import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasineComponent } from './magasine.component';

describe('MagasineComponent', () => {
  let component: MagasineComponent;
  let fixture: ComponentFixture<MagasineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagasineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

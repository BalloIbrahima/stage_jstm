import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMagasineComponent } from './admin-magasine.component';

describe('AdminMagasineComponent', () => {
  let component: AdminMagasineComponent;
  let fixture: ComponentFixture<AdminMagasineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMagasineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMagasineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminsComponent } from './gestion-admins.component';

describe('GestionAdminsComponent', () => {
  let component: GestionAdminsComponent;
  let fixture: ComponentFixture<GestionAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

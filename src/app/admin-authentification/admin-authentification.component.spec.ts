import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthentificationComponent } from './admin-authentification.component';

describe('AdminAuthentificationComponent', () => {
  let component: AdminAuthentificationComponent;
  let fixture: ComponentFixture<AdminAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

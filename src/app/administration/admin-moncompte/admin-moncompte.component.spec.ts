import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoncompteComponent } from './admin-moncompte.component';

describe('AdminMoncompteComponent', () => {
  let component: AdminMoncompteComponent;
  let fixture: ComponentFixture<AdminMoncompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMoncompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

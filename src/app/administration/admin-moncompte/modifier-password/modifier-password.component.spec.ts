import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPasswordComponent } from './modifier-password.component';

describe('ModifierPasswordComponent', () => {
  let component: ModifierPasswordComponent;
  let fixture: ComponentFixture<ModifierPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

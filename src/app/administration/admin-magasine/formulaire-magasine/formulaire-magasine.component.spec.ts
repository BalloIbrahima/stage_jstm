import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMagasineComponent } from './formulaire-magasine.component';

describe('FormulaireMagasineComponent', () => {
  let component: FormulaireMagasineComponent;
  let fixture: ComponentFixture<FormulaireMagasineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMagasineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMagasineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

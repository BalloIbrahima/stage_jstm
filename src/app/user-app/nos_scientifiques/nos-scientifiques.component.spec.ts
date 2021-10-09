import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosScientifiquesComponent } from './nos-scientifiques.component';

describe('NosScientifiquesComponent', () => {
  let component: NosScientifiquesComponent;
  let fixture: ComponentFixture<NosScientifiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosScientifiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosScientifiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

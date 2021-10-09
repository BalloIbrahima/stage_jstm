import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteNationaleComponent } from './sante-nationale.component';

describe('SanteNationaleComponent', () => {
  let component: SanteNationaleComponent;
  let fixture: ComponentFixture<SanteNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanteNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanteNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

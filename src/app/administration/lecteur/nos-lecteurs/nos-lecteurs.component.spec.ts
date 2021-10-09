import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosLecteursComponent } from './nos-lecteurs.component';

describe('NosLecteursComponent', () => {
  let component: NosLecteursComponent;
  let fixture: ComponentFixture<NosLecteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosLecteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosLecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

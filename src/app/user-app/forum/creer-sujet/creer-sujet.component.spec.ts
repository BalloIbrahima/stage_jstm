import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSujetComponent } from './creer-sujet.component';

describe('CreerSujetComponent', () => {
  let component: CreerSujetComponent;
  let fixture: ComponentFixture<CreerSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

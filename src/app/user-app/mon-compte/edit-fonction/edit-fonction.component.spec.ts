import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFonctionComponent } from './edit-fonction.component';

describe('EditFonctionComponent', () => {
  let component: EditFonctionComponent;
  let fixture: ComponentFixture<EditFonctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFonctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

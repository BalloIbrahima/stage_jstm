import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNomcompletComponent } from './edit-nomcomplet.component';

describe('EditNomcompletComponent', () => {
  let component: EditNomcompletComponent;
  let fixture: ComponentFixture<EditNomcompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNomcompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNomcompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

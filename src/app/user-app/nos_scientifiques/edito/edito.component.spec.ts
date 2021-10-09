import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoComponent } from './edito.component';

describe('EditoComponent', () => {
  let component: EditoComponent;
  let fixture: ComponentFixture<EditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

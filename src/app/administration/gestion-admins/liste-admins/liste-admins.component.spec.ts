import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdminsComponent } from './liste-admins.component';

describe('ListeAdminsComponent', () => {
  let component: ListeAdminsComponent;
  let fixture: ComponentFixture<ListeAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

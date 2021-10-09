import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAcceuilComponent } from './forum-acceuil.component';

describe('ForumAcceuilComponent', () => {
  let component: ForumAcceuilComponent;
  let fixture: ComponentFixture<ForumAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

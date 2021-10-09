import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommentairesComponent } from './all-commentaires.component';

describe('AllCommentairesComponent', () => {
  let component: AllCommentairesComponent;
  let fixture: ComponentFixture<AllCommentairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommentairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

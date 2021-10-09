import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireArticleComponent } from './formulaire-article.component';

describe('FormulaireArticleComponent', () => {
  let component: FormulaireArticleComponent;
  let fixture: ComponentFixture<FormulaireArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

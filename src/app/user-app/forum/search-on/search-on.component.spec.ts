import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnComponent } from './search-on.component';

describe('SearchOnComponent', () => {
  let component: SearchOnComponent;
  let fixture: ComponentFixture<SearchOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

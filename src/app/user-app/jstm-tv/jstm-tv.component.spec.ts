import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JstmTvComponent } from './jstm-tv.component';

describe('JstmTvComponent', () => {
  let component: JstmTvComponent;
  let fixture: ComponentFixture<JstmTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JstmTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JstmTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

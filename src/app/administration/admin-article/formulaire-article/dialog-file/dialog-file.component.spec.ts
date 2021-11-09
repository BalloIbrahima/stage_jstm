import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFileComponent } from './dialog-file.component';

describe('DialogFileComponent', () => {
  let component: DialogFileComponent;
  let fixture: ComponentFixture<DialogFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

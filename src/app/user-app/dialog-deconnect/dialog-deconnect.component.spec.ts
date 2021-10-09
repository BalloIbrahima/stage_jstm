import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeconnectComponent } from './dialog-deconnect.component';

describe('DialogDeconnectComponent', () => {
  let component: DialogDeconnectComponent;
  let fixture: ComponentFixture<DialogDeconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

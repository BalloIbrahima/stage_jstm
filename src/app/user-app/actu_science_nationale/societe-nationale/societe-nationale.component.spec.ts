import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteNationaleComponent } from './societe-nationale.component';

describe('SocieteNationaleComponent', () => {
  let component: SocieteNationaleComponent;
  let fixture: ComponentFixture<SocieteNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

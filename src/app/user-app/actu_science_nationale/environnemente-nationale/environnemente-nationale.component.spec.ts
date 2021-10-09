import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironnementeNationaleComponent } from './environnemente-nationale.component';

describe('EnvironnementeNationaleComponent', () => {
  let component: EnvironnementeNationaleComponent;
  let fixture: ComponentFixture<EnvironnementeNationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironnementeNationaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironnementeNationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

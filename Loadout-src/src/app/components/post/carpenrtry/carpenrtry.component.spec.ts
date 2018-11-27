import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpenrtryComponent } from './carpenrtry.component';

describe('CarpenrtryComponent', () => {
  let component: CarpenrtryComponent;
  let fixture: ComponentFixture<CarpenrtryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpenrtryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpenrtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

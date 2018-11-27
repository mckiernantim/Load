import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsComponent } from './pars.component';

describe('ParsComponent', () => {
  let component: ParsComponent;
  let fixture: ComponentFixture<ParsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

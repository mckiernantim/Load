import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Source4Component } from './source4.component';

describe('Source4Component', () => {
  let component: Source4Component;
  let fixture: ComponentFixture<Source4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Source4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Source4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

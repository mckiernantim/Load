import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FresnelComponent } from './fresnel.component';

describe('FresnelComponent', () => {
  let component: FresnelComponent;
  let fixture: ComponentFixture<FresnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FresnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FresnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

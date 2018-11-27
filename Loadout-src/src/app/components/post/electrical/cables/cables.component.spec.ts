import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CablesComponent } from './cables.component';

describe('CablesComponent', () => {
  let component: CablesComponent;
  let fixture: ComponentFixture<CablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

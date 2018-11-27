import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalComponent } from './electrical.component';

describe('ElectricalComponent', () => {
  let component: ElectricalComponent;
  let fixture: ComponentFixture<ElectricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdetailComponent } from './airdetail.component';

describe('AirdetailComponent', () => {
  let component: AirdetailComponent;
  let fixture: ComponentFixture<AirdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

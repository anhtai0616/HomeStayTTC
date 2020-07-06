import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkhComponent } from './addkh.component';

describe('AddkhComponent', () => {
  let component: AddkhComponent;
  let fixture: ComponentFixture<AddkhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

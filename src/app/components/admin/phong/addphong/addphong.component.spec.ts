import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphongComponent } from './addphong.component';

describe('AddphongComponent', () => {
  let component: AddphongComponent;
  let fixture: ComponentFixture<AddphongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

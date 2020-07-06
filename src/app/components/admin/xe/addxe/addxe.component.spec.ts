import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddxeComponent } from './addxe.component';

describe('AddxeComponent', () => {
  let component: AddxeComponent;
  let fixture: ComponentFixture<AddxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

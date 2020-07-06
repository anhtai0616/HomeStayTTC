import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkhComponent } from './editkh.component';

describe('EditkhComponent', () => {
  let component: EditkhComponent;
  let fixture: ComponentFixture<EditkhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdichvuComponent } from './editdichvu.component';

describe('EditdichvuComponent', () => {
  let component: EditdichvuComponent;
  let fixture: ComponentFixture<EditdichvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdichvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddichvuComponent } from './adddichvu.component';

describe('AdddichvuComponent', () => {
  let component: AdddichvuComponent;
  let fixture: ComponentFixture<AdddichvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddichvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

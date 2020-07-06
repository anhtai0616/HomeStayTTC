import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffairComponent } from './buffair.component';

describe('BuffairComponent', () => {
  let component: BuffairComponent;
  let fixture: ComponentFixture<BuffairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

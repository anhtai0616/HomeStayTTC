import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffhomeComponent } from './buffhome.component';

describe('BuffhomeComponent', () => {
  let component: BuffhomeComponent;
  let fixture: ComponentFixture<BuffhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

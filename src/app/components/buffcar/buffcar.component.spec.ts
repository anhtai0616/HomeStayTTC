import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffcarComponent } from './buffcar.component';

describe('BuffcarComponent', () => {
  let component: BuffcarComponent;
  let fixture: ComponentFixture<BuffcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

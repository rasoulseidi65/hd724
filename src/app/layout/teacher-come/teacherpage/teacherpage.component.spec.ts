import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeacherpageComponent } from './teacherpage.component';

describe('TeacherpageComponent', () => {
  let component: TeacherpageComponent;
  let fixture: ComponentFixture<TeacherpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

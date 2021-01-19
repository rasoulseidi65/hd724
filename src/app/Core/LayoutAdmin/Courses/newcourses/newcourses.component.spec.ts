import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewcoursesComponent } from './newcourses.component';

describe('NewcoursesComponent', () => {
  let component: NewcoursesComponent;
  let fixture: ComponentFixture<NewcoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

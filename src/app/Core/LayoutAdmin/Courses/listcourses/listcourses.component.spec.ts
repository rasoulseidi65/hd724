import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListcoursesComponent } from './listcourses.component';

describe('ListcoursesComponent', () => {
  let component: ListcoursesComponent;
  let fixture: ComponentFixture<ListcoursesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

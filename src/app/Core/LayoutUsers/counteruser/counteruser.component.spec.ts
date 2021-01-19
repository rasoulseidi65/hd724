import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounteruserComponent } from './counteruser.component';

describe('CounteruserComponent', () => {
  let component: CounteruserComponent;
  let fixture: ComponentFixture<CounteruserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounteruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

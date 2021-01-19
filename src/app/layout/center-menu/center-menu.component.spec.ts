import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CenterMenuComponent } from './center-menu.component';

describe('CenterMenuComponent', () => {
  let component: CenterMenuComponent;
  let fixture: ComponentFixture<CenterMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

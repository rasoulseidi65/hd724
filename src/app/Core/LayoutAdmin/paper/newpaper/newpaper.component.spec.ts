import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewpaperComponent } from './newpaper.component';

describe('NewpaperComponent', () => {
  let component: NewpaperComponent;
  let fixture: ComponentFixture<NewpaperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

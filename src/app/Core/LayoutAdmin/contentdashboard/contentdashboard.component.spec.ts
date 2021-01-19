import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentdashboardComponent } from './contentdashboard.component';

describe('ContentdashboardComponent', () => {
  let component: ContentdashboardComponent;
  let fixture: ComponentFixture<ContentdashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

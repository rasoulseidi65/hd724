import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentCommentsComponent } from './content-comments.component';

describe('ContentCommentsComponent', () => {
  let component: ContentCommentsComponent;
  let fixture: ComponentFixture<ContentCommentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

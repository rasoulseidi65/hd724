import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscriberAffairsComponent } from './subscriber-affairs.component';

describe('SubscriberAffairsComponent', () => {
  let component: SubscriberAffairsComponent;
  let fixture: ComponentFixture<SubscriberAffairsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

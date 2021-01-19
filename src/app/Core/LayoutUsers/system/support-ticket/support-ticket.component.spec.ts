import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupportTicketComponent } from './support-ticket.component';

describe('SupportTicketComponent', () => {
  let component: SupportTicketComponent;
  let fixture: ComponentFixture<SupportTicketComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

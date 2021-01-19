import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyPurchasesComponent } from './my-purchases.component';

describe('MyPurchasesComponent', () => {
  let component: MyPurchasesComponent;
  let fixture: ComponentFixture<MyPurchasesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

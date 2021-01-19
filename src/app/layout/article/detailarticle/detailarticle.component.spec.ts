import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailarticleComponent } from './detailarticle.component';

describe('DetailarticleComponent', () => {
  let component: DetailarticleComponent;
  let fixture: ComponentFixture<DetailarticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

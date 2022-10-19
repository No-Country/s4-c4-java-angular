import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingpageStartComponent } from './on-boardingpage-start.component';

describe('OnBoardingpageStartComponent', () => {
  let component: OnBoardingpageStartComponent;
  let fixture: ComponentFixture<OnBoardingpageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingpageStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnBoardingpageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

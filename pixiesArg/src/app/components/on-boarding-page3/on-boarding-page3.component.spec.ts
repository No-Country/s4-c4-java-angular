import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingPage3Component } from './on-boarding-page3.component';

describe('OnBoardingPage3Component', () => {
  let component: OnBoardingPage3Component;
  let fixture: ComponentFixture<OnBoardingPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnBoardingPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

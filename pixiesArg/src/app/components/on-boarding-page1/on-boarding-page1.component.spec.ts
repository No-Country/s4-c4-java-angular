import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingPage1Component } from './on-boarding-page1.component';

describe('OnBoardingPage1Component', () => {
  let component: OnBoardingPage1Component;
  let fixture: ComponentFixture<OnBoardingPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnBoardingPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

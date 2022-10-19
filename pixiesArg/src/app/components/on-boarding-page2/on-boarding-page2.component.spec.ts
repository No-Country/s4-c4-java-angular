import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingPage2Component } from './on-boarding-page2.component';

describe('OnBoardingPage2Component', () => {
  let component: OnBoardingPage2Component;
  let fixture: ComponentFixture<OnBoardingPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnBoardingPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

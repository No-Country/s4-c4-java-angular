import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding-page1',
  templateUrl: './on-boarding-page1.component.html',
  styleUrls: ['./on-boarding-page1.component.scss']
})
export class OnBoardingPage1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss'],
})
export class OnBoardingComponent implements OnInit {
  page: boolean = true;
  page1: boolean = false;
  page2: boolean = false;
  page3: boolean = false;

  constructor(private router: Router) {}

  skip1() {
    this.page1 = false;
    this.page2 = true;
  }

  skip2() {
    this.page2 = false;
    this.page3 = true;
  }

  skip3() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.page = false;
      this.page1 = true;
    }, 3000);
  }
}

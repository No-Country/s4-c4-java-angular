import { getLocaleTimeFormat } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-logout-counter',
  templateUrl: './logout-counter.component.html',
  styleUrls: ['./logout-counter.component.scss'],
})
export class LogoutCounterComponent implements OnInit, OnDestroy {
  ClockCounter = new Date();
  @Input() seconds: number = 15;

  countDown() {
    let interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
        return this.seconds;
      } else if (this.seconds === 0) {
        this.logout();
        return 0;
      } else {
        clearInterval(interval);
        return 0;
      }
    }, 1000);
  }

  cancelLogout() {
    this.seconds = 1800;
    this.router.navigate(['/home']);
  }

  constructor(private router: Router, private cookieService: CookieService) {}

  logout() {
    this.cookieService.removeAll();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.countDown();
  }

  ngOnDestroy(): void {
    this.seconds = 1800;
  }
}

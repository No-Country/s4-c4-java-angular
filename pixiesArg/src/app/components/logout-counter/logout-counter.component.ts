import { getLocaleTimeFormat } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-logout-counter',
  templateUrl: './logout-counter.component.html',
  styleUrls: ['./logout-counter.component.scss'],
})
export class LogoutCounterComponent implements OnInit {
  ClockCounter = new Date();
  @Input() seconds: number = 15;

  countDown() {
    let interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
        return this.seconds;
      } else {
        console.log('Logout');
        clearInterval(interval);
        return 0;
      }
    }, 1000);
  }

  constructor() {}

  ngOnInit(): void {
    this.countDown()
  }
}

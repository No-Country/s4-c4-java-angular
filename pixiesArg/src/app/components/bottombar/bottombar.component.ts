import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {
  constructor(private routing: Location) {}
  isShow: boolean = true;

  ngOnInit(): void {
    this.routing.onUrlChange(() => {
      this.checkVisibility();
    });
  }

  checkVisibility() {
    this.routing.path() === '/login'
      ? (this.isShow = false)
      : (this.isShow = true);
  }

  logout() {
    console.log('Salir de la app');
  }
}

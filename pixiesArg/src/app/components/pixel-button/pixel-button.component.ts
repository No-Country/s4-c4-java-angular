import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-button',
  templateUrl: './pixel-button.component.html',
  styleUrls: ['./pixel-button.component.scss'],
})
export class PixelButtonComponent implements OnInit {
  @Input() cancel: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  isCancel(value: boolean) {
    if (value) {
      return 'pixel-button--cancel';
    } else {
      return;
    }
  }
}

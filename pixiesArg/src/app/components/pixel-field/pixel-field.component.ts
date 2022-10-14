import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-field',
  templateUrl: './pixel-field.component.html',
  styleUrls: ['./pixel-field.component.scss'],
})
export class PixelFieldComponent implements OnInit {
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}
  
}

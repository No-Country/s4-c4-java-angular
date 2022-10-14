import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  constructor(private location: Location) {}

  redirect() {
    this.location.back();
  }

  ngOnInit(): void {}
}

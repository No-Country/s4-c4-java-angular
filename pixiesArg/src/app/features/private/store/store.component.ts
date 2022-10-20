import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { Assets } from './Assets';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  items!: Assets;
  iterable: any[] | undefined = [];
  assetType: string = '';

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.getStore().subscribe({
      next: (res) => {
        this.items = res;
      },
    });
  }


  onChange(event: any) {
    this.assetType = event.target.value;

    switch (event.target.value) {
      case 'head':
        this.iterable = this.items.head;
        break;
      case 'body':
        this.iterable = this.items.body;
        break;
      case 'hand':
        this.iterable = this.items.hand;
        break;
      case 'pets':
        this.iterable = this.items.pets;
        break;
      case 'legs':
        this.iterable = this.items.legs;
        break;
      case 'hair':
        this.iterable = this.items.hair;
        break;
      default:
        'Whatt';
    }
  }
}

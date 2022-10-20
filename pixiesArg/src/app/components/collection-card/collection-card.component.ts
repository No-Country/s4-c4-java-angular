import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/core/services/collection.service';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  collection: any[] = [];

  constructor(
    private userService: UserAvatarService,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (res) => {
        console.log(res.assets);
        this.collection = res.assets;
      },
    });
  }

  equip(item: any) {
    this.collectionService.putEquip(item.id, item).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}

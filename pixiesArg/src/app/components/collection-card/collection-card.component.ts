import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/core/services/collection.service';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';
import Swal from 'sweetalert2';

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
    this.getCollection();
  }

  getCollection() {
    this.userService.getUser().subscribe({
      next: (res) => {
        console.log(res.assets);
        this.collection = res.assets;
      },
    });
  }

  equip(item: any) {
    this.collectionService.putEquip(item.id, item).subscribe({
      next: () => {
        this.getCollection();
        Swal.fire({
          icon: 'success',
          title: 'Item equipado',
          heightAuto: false
        })
      },
    });
  }

  unequip(item: any) {
    this.collectionService.unEquip(item.id, item).subscribe({
      next: () => {
        this.getCollection();
        Swal.fire({
          icon: 'success',
          title: 'Item desequipado',
          heightAuto: false
        })
      },
    });
  }
}

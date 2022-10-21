import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  constructor(
    private userAvatar: UserAvatarService,
    private favoriteService: FavoriteService
  ) {}

  @Input() avatar: any;

  id: number = Math.floor(Math.random() * 1000000);

  toggleFavorite() {
    this.isFavorite = true;
    this.favoriteService.postFavorite(this.avatar.idUser).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  myUser: any;

  isFavorite: boolean = true;

  ngOnInit(): void {
    this.userAvatar.getUser().subscribe({
      next: (res) => {
        this.myUser = res;
      },
      complete: () => {
        this.checkIsFavorite();
      },
    });
    console.log(this.avatar.assets)
  }

  checkIsFavorite() {
    // if (this.myUser.idFavorite.contains(this.avatar.avatar.id)) {
    //   this.isFavorite = true;
    // }
  }
}

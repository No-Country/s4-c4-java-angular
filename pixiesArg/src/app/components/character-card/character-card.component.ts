import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() refresh = new EventEmitter<any>();

  id: number = Math.floor(Math.random() * 1000000);

  toggleFavorite() {
    this.isNotFavorite = false;
    this.favoriteService.postFavorite(this.avatar.idUser).subscribe({
      next: () => {
        Swal.fire({
          title: 'Sharing love',
          text: 'Por regalar amor te damos 100 coins',
        });
        this.refresh.emit();
      },
    });
  }

  myUser: any;

  isNotFavorite: boolean = true;

  ngOnInit(): void {
    this.userAvatar.getUser().subscribe({
      next: (res) => {
        console.log('Soy el user', res);
        this.myUser = res;
        this.checkIsFavorite();
      },
      complete: () => {
        this.checkIsFavorite();
      },
    });
  }

  checkIsFavorite() {
    this.myUser.idFavorite.forEach((item: any) => {
      if (item === this.avatar.avatar.id) {
        this.isNotFavorite = false;
      }
    });
  }
}

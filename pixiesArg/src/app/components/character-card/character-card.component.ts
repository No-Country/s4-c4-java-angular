import { Component, OnInit, Input } from '@angular/core';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  constructor(private userAvatar: UserAvatarService) {}

  @Input() avatar: any;

  id: number = Math.floor(Math.random() * 1000000);

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  myUser: any;

  isFavorite: boolean = false;

  ngOnInit(): void {
    this.userAvatar.getUser().subscribe({
      next: (res) => {
        this.myUser = res;
      },
      complete: () => {
        this.checkIsFavorite();
      },
    });
  }

  checkIsFavorite() {
    // if (this.myUser.idFavorite.contains(this.avatar.avatar.id)) {
    //   this.isFavorite = true;
    // }
  }
}

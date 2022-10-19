import { Component, OnInit } from '@angular/core';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  constructor(private userAvatar: UserAvatarService) {}
  char: any;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  isFavorite: boolean = true;

  ngOnInit(): void {
    this.userAvatar.getUser().subscribe({
      next: (res) => {
        console.log(res);
        this.char = res[9];
      },
      complete: () => {
        console.log(this.char);
      },
    });
  }
}

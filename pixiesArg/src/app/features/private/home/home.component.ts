import { Component, OnInit } from '@angular/core';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  avatars: any[] = [];

  constructor(private userAvatars: UserAvatarService) {}

  ngOnInit(): void {
    this.userAvatars.allUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.avatars = res;
      },
    });

    this.userAvatars.getUser().subscribe({
      next: (res) => {
        localStorage.setItem('avatarId', res.avatar.id);
      },
    });
  }
}

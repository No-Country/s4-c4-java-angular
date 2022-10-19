import { Component, OnInit } from '@angular/core';
import { UserAvatarService } from 'src/app/core/services/user-avatar.service';

@Component({
  selector: 'app-my-account-card',
  templateUrl: './my-account-card.component.html',
  styleUrls: ['./my-account-card.component.scss'],
})
export class MyAccountCardComponent implements OnInit {
  myData: any;

  constructor(private userAvatar: UserAvatarService) {}

  ngOnInit(): void {
    this.userAvatar.getUser().subscribe({
      next: (res) => {
        console.log(res);
        this.myData = res;
      },
    });
  }
}

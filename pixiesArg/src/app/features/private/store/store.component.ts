import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private store:StoreService) { }

  ngOnInit(): void {
    this.store.getStore().subscribe({
      next: (res)=>{
        console.log(res)
      }
    })
  }

}

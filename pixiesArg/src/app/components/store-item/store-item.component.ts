import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { StoreService } from 'src/app/core/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent implements OnInit {
  @Input() type: string = '';
  @Input() item: any;
  @Output() refreshStore = new EventEmitter<string>();

  constructor(
    private storeService: StoreService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  willYouBuy(item: any): void {
    Swal.fire({
      title: 'Estas seguro que quieres este item?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, comprar',
      confirmButtonColor: '#547811',
      denyButtonText: `No lo quiero`,
      denyButtonColor: '#e0393a',
    }).then((result) => {
      if (result.isConfirmed) {
        let userId: number = Number(this.cookieService.get('id'));
        console.log(this.type, item);
        this.storeService
          .buyItem(this.type, this.item.id, userId, this.item)
          .subscribe({
            next: (res) => {
              console.log(res);
              Swal.fire('Compra exitosa', '', 'success');
              this.router.navigate(['/my-account']);
            },
            error: () => {
              Swal.fire('No tienes dinero suficiente');
            },
          });
      } else if (result.isDenied) {
        Swal.fire('Sigue buscando tus items', '', 'info');
      }
    });
  }
  ngOnInit(): void {}
}

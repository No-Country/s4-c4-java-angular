import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {


this.router.navigate(['/home']);

  }


}

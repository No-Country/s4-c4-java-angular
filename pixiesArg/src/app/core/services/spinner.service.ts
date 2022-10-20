import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinner$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setSpinner(value: boolean) {
    this.spinner$.next(value);
  }
}

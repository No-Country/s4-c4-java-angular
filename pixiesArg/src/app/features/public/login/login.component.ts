import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  login() {
    this.authService.postLogin(this.formLogin.value).subscribe({
      next: (res) => {
        console.log('response login', res);
        this.cookieService.put('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('avatarId', res.id);
        this.router.navigate(['/home']);
      },
    });
  }
}

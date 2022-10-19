import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  register() {
    this.registerService.postRegister(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/register']);
      },
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private registerService: RegisterService
  ) {}

  register() {
    this.registerService.postRegister(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  ngOnInit(): void {}
}

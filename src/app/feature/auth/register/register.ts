import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {

  registerForm!: FormGroup;
  loading = false;
  error = '';


  constructor(private fb: FormBuilder,
    private authService: Auth,
    private router : Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
});
  }

  submit() {
    if (this.registerForm.invalid) return;

    this.loading = true;

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: err => {
        this.error = err.error?.message || 'Register failed';
        this.loading = false;
      }
    });
  }

}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { catchError, of } from 'rxjs';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ButtonModule,PasswordModule,ReactiveFormsModule,CommonModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    private formBuilder = inject(FormBuilder);
    private http = inject(HttpClient);
    loginForm!: FormGroup;
    emailId = `connect@me.health`;
    emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    constructor(private router: Router) {}
    ngOnInit(): void {
      this.loginForm = this.initializeForm();
    }

    private initializeForm() {
      return this.formBuilder.group({
        email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailValidator)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

    onSubmit() {
      if (this.loginForm.valid) {
        this.http.post("https://api.weightgurus.com/v3/account/login", this.loginForm.value)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              console.error('Login failed', error);
              alert('Login failed: ' + error.message);
              return of(null);
            })
          )
          .subscribe((res: any) => {
            if (res) {
              this.router.navigate(['/layout']);

            } else {
              alert('Invalid credentials or login failed.');
            }
          });
      } else {
        this.loginForm.markAllAsTouched();
      }
    }

    get emailControl() {
      return this.loginForm.get('email') as FormControl;
    }
    get passwordControl() {
      return this.loginForm.get('password') as FormControl;
    }

}

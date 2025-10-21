
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]*$') // No special characters
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).*$') // At least one capital letter and one number
        ]
      ]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Simulate backend call
      // const { username, password } = this.loginForm.value;

      this.authService.login(this.loginForm.value).subscribe((user) => {
        console.log("Token in login com: ", user.token);
        localStorage.setItem('token', user.token); // assuming token is part of User
        // localStorage.setItem('role', user.role);   // if role is returned
        this.successMessage = 'Login successful!';
        this.errorMessage = null;
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
      this.successMessage = null;
    }
  }
}
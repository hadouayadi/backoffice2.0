import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../shared/models/admin.models';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private service: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm && this.loginForm.get('username') && this.loginForm.get('username')!.invalid) {
      // Handle the case where loginForm, loginForm.get('username') are not null or undefined
      console.log('Username is invalid');
    }
    if (this.loginForm && this.loginForm.valid) {

      this.service.login(this.loginForm.value.username, this.loginForm.value.password).
        subscribe((x: Admin) => {
          localStorage.setItem("access", x.token);
         this.router.navigateByUrl("/indoor/dashboard")
        })
    }
  }
}

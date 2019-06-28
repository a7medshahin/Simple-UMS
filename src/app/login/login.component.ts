import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {

   }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
    this.login();
  }
  login() {
    if (this.loginForm.value.userName === 'admin' && this.loginForm.value.password === 'asdasd') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/dashboard/admin']);
    } else if (this.loginForm.value.userName === 'user' && this.loginForm.value.password === 'asdasd') {
      localStorage.setItem('role', 'user');
      this.router.navigate(['/dashboard/user']);
    } else {
      localStorage.setItem('role', '');
    }
  }
}

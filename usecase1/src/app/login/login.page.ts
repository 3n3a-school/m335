import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup; 

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(8)]),
    });
  }

  sendLoginForm() {
    let result = this.loginForm.value
    this.authService.loginUser({...result})
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup; 

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(8)]),
    });
  }

  sendLoginForm() {
    let loginFormResult = this.loginForm.value
    console.log(loginFormResult);
    
  }

}

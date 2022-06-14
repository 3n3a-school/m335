import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup; 

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      displayname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,
        Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(8)]),
    });
  }

  sendRegisterForm() {
    let result = this.registerForm.value
    this.authService.createUser({...result})
  }

}
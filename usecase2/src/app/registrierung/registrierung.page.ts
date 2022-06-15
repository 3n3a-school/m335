import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from '../_types/user';
import {Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {

  user = {} as User;

  constructor(private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private authService: AuthService
   ) {
  }

  ngOnInit() {
  }

  async register (user: User) {
    if (this.wasSomethingEntered()) {
      await this.authService.createUserWithEmailAndPassword(user, '/')
    } else {
      let errToast = await this.toastCtrl.create({
        message: `Please enter your name, email and password`,
        duration: 3000,
        color: 'danger'
      })
      errToast.present()
    }
  }

  wasSomethingEntered() {
    if (this.user.email != undefined && this.user.password != undefined)
      return true
    return false
  }

  async backToLogin() {
    await this.router.navigate(['login'])
  }
}

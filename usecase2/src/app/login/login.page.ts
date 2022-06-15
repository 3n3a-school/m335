import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { User } from '../_types/user';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService
  ) {

  }
  async ngOnInit() {
    let welcomeDone = await this.storageService.get('WelcomeDone');
    if (!welcomeDone) {
      await this.router.navigate(['willkommen'])
    }
  }
  async doLogin (user: User) {
    if (this.wasSomethingEntered()) {
      await this.authService.loginWithEmailAndPassword(user, '/')
    } else {
      let errToast = await this.toastCtrl.create({
        message: `Please enter your email and password`,
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

  async gotoRegistrierung () {
    await this.router.navigate(['registrierung'])
  }
}

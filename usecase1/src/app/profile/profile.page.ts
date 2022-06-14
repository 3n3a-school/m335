import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData: User;

  constructor(private authService: AuthService, private toastController: ToastController) { }

  ngOnInit() {
    this.userData = this.authService.userData
  }

  logout() {
    this.authService.logout()
  }

  resetPass() {
    this.authService.sendNewPassword()
      .then(async () => {
        let toast = await this.toastController.create({
          message: `A link to reset your password was sent to ${this.authService.userData.email}`,
          duration: 2000
        })   
        toast.present() 
      })
      .catch(async (e) => {
        let toast = await this.toastController.create({
          message: `${e.code}: ${e.message}`,
          duration: 6000,
          color: 'danger'
        })
        toast.present()
      })
  }

}

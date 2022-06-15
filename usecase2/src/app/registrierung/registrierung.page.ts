import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from '../_types/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {

  user = {} as User;

  constructor(private router: Router,
    private alertCtrl: AlertController,
    private toast: ToastController
   ) {
  }

  ngOnInit() {
  }

  async register (user: User) {
    //TODO: Registrierung
  }

  goBackToLogin() {
   //TODO: Navigation zu Login
  }
}

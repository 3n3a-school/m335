import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { User } from '../_types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;

  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) {

  }
  ngOnInit() {
   // TODO: Evt. Willkommensseite darstellen
  }
  async doLogin (user: User) {
   // TODO: Login
  }

  gotoRegistrierung () {
   // TODO: Navigation zu Registrierung
  }
}

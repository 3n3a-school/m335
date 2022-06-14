import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userData = this.authService.userData
  }

  logout() {
    this.authService.logout()
  }

}

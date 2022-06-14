import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Trips', url: '/trips', icon: 'airplane' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Profile', url: '/profile', icon: 'user-circle' }
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  isWelcomePage() {  
    return this.router.url === "/welcome"
  }

  logout() {
    this.authService.logout()
  }
}

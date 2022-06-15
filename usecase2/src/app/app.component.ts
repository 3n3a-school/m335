import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Galerie', url: '/galerie', icon: 'images' },
    { title: 'Ferienorte', url: '/ferienorte', icon: 'airplane' },
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
  }

  isMenuPage() {
    let excludedPages = ["/login", "/register", "/willkommen", "/registrierung"]
    return !excludedPages.includes(this.router.url)
  }

  logout() {
    this.authService.logout()
  }
}

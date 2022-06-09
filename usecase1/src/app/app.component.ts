import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Trips', url: '/trips', icon: 'airplane' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  isWelcomePage() {  
    return this.router.url === "/welcome"
  }
}

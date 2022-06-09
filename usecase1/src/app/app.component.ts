import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Trips', url: '/trips', icon: 'airplane' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];
  constructor() {}
}

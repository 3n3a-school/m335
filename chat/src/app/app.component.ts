import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Welcome', url: '/welcome', icon: 'home' },
    { title: 'Chat', url: '/chat', icon: 'chatbubble' },
  ];
  constructor() {}
}

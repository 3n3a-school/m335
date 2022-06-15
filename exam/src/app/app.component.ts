import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from './_services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    email: string;
    public appPages = [
        { title: 'News', path: '/news', icon: 'newspaper'},
        { title: 'Chat', path: '/chat', icon: 'chatbubbles'}
    ];

    constructor(private platform: Platform, private authService: AuthService) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(async () => {
            this.email = (await this.authService.currentUser).email
        });
    }

    async doLogout() {
        await this.authService.logout()
    }
}

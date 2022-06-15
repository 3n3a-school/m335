import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { AuthService } from './_services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    email = new Subject<string>();
    public appPages = [
        { title: 'News', path: '/news', icon: 'newspaper'},
        { title: 'Chat', path: '/chat', icon: 'chatbubbles'}
    ];

    constructor(private platform: Platform, private authService: AuthService) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(async () => {
        });
        
        this.authService.currentUser.subscribe((user) =>  {
            if (user) {
                this.email.next(user.email)
            }
        })
    }

    async doLogout() {
        await this.authService.logout()
    }
}

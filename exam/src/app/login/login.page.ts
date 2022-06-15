import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { User } from '../_types/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginButtonDisabled: boolean = true;
    user = {} as User;

    constructor(private router: Router, private storageService: StorageService, private authService: AuthService) {}

    ngOnInit() {
        this.doWelcoming()
    }

    onChange() {
        if (this.user.email != undefined && this.user.password != undefined) {
            this.loginButtonDisabled = false
        } else  {
            this.loginButtonDisabled = true
        }
    }

    async doWelcoming() {
        let welcomeDone = await this.storageService.get('WelcomeDone');
        if (!welcomeDone) {
            await this.router.navigate(['willkommen'])
        }
    }

    async gotoRegister() {
        await this.router.navigate(['registrierung'])
    }

    async doLogin() {
        await this.authService.loginWithEmailAndPassword(this.user, '/news')
    }

}

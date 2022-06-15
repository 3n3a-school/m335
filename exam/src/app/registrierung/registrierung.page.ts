import { Component, OnInit } from '@angular/core';
import { User } from '../_types/user';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registrierung',
    templateUrl: './registrierung.page.html',
    styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {

    user = {} as User;
    registerButtonDisabled: boolean = true;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {}
    
    onChange() {
        if (
            this.user.displayname != undefined &&
            this.user.email != undefined &&
            this.user.password != undefined &&
            this.user.passwordConfirm != undefined &&
            this.doPasswordMatch()
        ) {
            this.registerButtonDisabled = false
        } else {
            this.registerButtonDisabled = true
        }
    }

    doPasswordMatch() {
        if (this.user.password === this.user.passwordConfirm) {
            return true
        }
        return false
    }

    async doRegistration() {
        await this.authService.createUserWithEmailAndPassword(this.user, '/news')
    }

    async gotoLogin() {
        await this.router.navigate(['login'])
    }
}

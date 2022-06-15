import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../_types/user';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private toast: ToastController
    ) {}

    async loginWithEmailAndPassword(user: User, redirectToURL?: string) {
        try {
            await this.afAuth.signInWithEmailAndPassword(user.email, user.password)
            if (!await this.router.navigateByUrl(redirectToURL)) {
                await this.router.navigate(['news'])
              }
            await this.showSuccessToast(`Willkommen ${(await this.afAuth.currentUser).displayName}`)
        } catch (e) {
            await this.showErrorToast(e, 'Login')
        }
    }

    async createUserWithEmailAndPassword(user: User, redirectToURL?: string) {
        try {
            this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(async (res) => {
                res.user.updateProfile({
                  displayName: user.displayname
                })
                if (!await this.router.navigateByUrl(redirectToURL)) {
                  await this.router.navigate(['news'])
                }
                await this.showSuccessToast(`Registrierung erfolgreich`)
              })
        } catch (e) {
            await this.showErrorToast(e, 'Registration')
        }
    }

    get currentUser() {
        return this.afAuth.authState;
    }

    async showSuccessToast(message) {
        let sucToast = await this.toast.create({
            message: message,
            duration: 2000,
            color: 'success'
        })
        sucToast.present()
    }

    async showErrorToast(e, component) {
        console.error(`[${component}]: ${e.code}: ${e.message}`)
        let errToast = await this.toast.create({
            message: `${component} failed because ${e.message}`,
            duration: 5000,
            color: 'danger'
        })
        errToast.present()
    }

    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.afAuth.currentUser !== null;
    }

    async logout() {
        await this.afAuth.signOut()
        await this.router.navigate(['login'])
        let toast = await this.toast.create({
        message: "You have been logged out.",
        duration: 2000
        })
        toast.present()
    }
}

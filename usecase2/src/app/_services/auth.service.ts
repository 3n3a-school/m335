import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../_types/user';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private toastCtrl: ToastController) { }

  async loginWithEmailAndPassword (user: User, redirectToURL?: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(user.email, user.password).then((_) => {
        this.router.navigateByUrl(redirectToURL)
      })
    }
    catch(e) {
      console.error(`[Sign in]: ${e.code}: ${e.message}`)
      let errToast = await this.toastCtrl.create({
        message: `Signin failed because ${e.message}`,
        duration: 3000,
        color: 'danger'
      })
      errToast.present()
    }
  }

  async createUserWithEmailAndPassword (user: User, redirectToURL?: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((res) => {
        res.user.updateProfile({
          displayName: user.displayname
        })
        this.router.navigateByUrl(redirectToURL)
      })
    }
    catch(e) {
      console.error(`[Register]: ${e.code}: ${e.message}`)
      let errToast = await this.toastCtrl.create({
        message: `Registration failed because ${e.message}`,
        duration: 3000,
        color: 'danger'
      })
      errToast.present()
    }
  }
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }
  
  async logout() {
    // TODO: do logout stuff    
    this.router.navigate(['login'])
    let toast = await this.toastCtrl.create({
      message: "You have been logged out.",
      duration: 2000
    })
    toast.present()
  }
}

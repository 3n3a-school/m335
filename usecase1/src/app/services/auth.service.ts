import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) =>  {
      if (user) {
        this.userData = {email: user.email, displayname: user.displayName}
        localStorage.setItem('user', JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user')!)
      } else {
        localStorage.setItem('user', 'null')
        JSON.parse(localStorage.getItem('user')!)
      }
    })
   }

  async loginUser(user: User) {
    this.afAuth.signInWithEmailAndPassword(user.email, user.password).then((creds) => {
      this.router.navigate([''])
    })
      .catch((e) => {
        if (e.code === "auth/wrong-password") {
          console.debug(`Firebase Auth: ${e.code}: ${e.message}`)
          alert(`Wrong Password. Please try again.`)
        } else {
          console.debug(`Firebase Auth: ${e.code}: ${e.message}`)
          alert(e.message)
        }
      })
  }

  async createUser(user:User) {
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((creds) => {
      creds.user.updateProfile({
        displayName: user.displayname
      })
      this.router.navigate([''])
    })
    .catch((e) => {
      if (e.code === "auth/weak-password") {
        console.debug(`Firebase Auth: ${e.code}: ${e.message}`)
        alert(`Weak Password, please choose a Password with more than 8 characters.`)
      } else {
        console.debug(`Firebase Auth: ${e.code}: ${e.message}`)
        alert(e.message)
      }
    })
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login'])
    })
  }
}

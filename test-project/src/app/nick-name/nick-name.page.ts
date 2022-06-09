import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Nickname {
  name: String;
}

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.page.html',
  styleUrls: ['./nick-name.page.scss'],
})
export class NickNamePage implements OnInit {

  activeNick: Nickname;
  nicknames: Nickname[] = [];

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Enter the required Info',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'name',
          placeholder: 'Enter a nickname',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (e) => {
            this.addNick(e.name)     
          }
        }
      ]
    });

    await alert.present();
    const nameInput: HTMLElement = document.querySelector("#name");
    nameInput.focus();
  }

  addNick(name: String) {
    this.nicknames.push({name: name})
    this.activeNick = {name: name}
  }

}

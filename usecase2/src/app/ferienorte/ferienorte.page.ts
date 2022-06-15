import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Ferienort } from "../_types/ferienort";

@Component({
  selector: 'app-ferienorte',
  templateUrl: './ferienorte.page.html',
  styleUrls: ['./ferienorte.page.scss'],
})
export class FerienortePage implements OnInit {

  groupNumber: string =  'G6'; // Bsp. G1

  holidayRef: AngularFireList<Ferienort[]>
  holidayList: Observable<Ferienort[][]>

  constructor(public alertCtrl: AlertController, 
    afDb: AngularFireDatabase) {
    this.holidayRef = afDb.list(`/ferienorte/${this.groupNumber}`)
    this.holidayList = this.holidayRef.valueChanges()
  }

  ngOnInit() {
  }

  async addFerienort() {
    let addDialog = await this.alertCtrl.create({
      cssClass: 'popup',
      header: 'Add new Ferienort',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'The name...'
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
          text: 'Ok',
          handler: (res) => {
            
          }
        }
      ]
    });

    await addDialog.present();
  }
}

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

  groupNumber: string =  'G0'; // Bsp. G1


  constructor(public alertCtrl: AlertController,afDb: AngularFireDatabase) {
   //TODO: Ferienorte von Firebase holen und zuweisen
  }

  ngOnInit() {
  }

  addFerienort() {
    //TODO: Ferienort mit AlertCtrl hinzufügen
  }
}

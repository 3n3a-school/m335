import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { AlertController } from '@ionic/angular';
import { Gallerie } from "../_types/gallerie";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.page.html',
  styleUrls: ['./gallerie.page.scss'],
})
export class GalleriePage implements OnInit {

  groupNumber: string =  'G0'; // Bsp. G1


  constructor(public alertCtrl: AlertController,afDb: AngularFireDatabase) {
   //TODO: Gallerie holen und zuweisen
  }


  ngOnInit() {
  }

}

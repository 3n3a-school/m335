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

  groupNumber: string =  'G6'; // Bsp. G1

  galleryRef: AngularFireList<Gallerie[]>
  galleryList: Observable<Gallerie[][]>

  constructor(public alertCtrl: AlertController,afDb: AngularFireDatabase) {
    this.galleryRef = afDb.list(`/gallerie/${this.groupNumber}`)
    this.galleryList = this.galleryRef.valueChanges()
  }


  ngOnInit() {
    
  }

}

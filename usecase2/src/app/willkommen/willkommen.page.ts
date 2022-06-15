import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-willkommen',
  templateUrl: './willkommen.page.html',
  styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  welcomeDone() {
    //TODO: Willkommensseite ab jetzt nicht mehr anzeigen (@ionic/storage verwenden ;-))
  }

}

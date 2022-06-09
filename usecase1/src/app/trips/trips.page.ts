import { Component, OnInit } from '@angular/core';
import { Trip, Location, Image } from "../trips.model"
import { TripService } from '../trip.service';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  trips: Trip[];

  constructor(
    private tripService: TripService, 
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.trips = this.tripService.getTrips()
  }

  openTrip(id: Number) {
    this.router.navigate(["trip", id])
  }

  async showPopup() {
    const alert = await this.alertController.create({
      cssClass: 'popup',
      header: 'Add new Trip',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Your title...'
        },
        {
          name: 'location-name',
          type: 'text',
          placeholder: 'Location Name...'
        },
        {
          name: 'location-address',
          type: 'text',
          placeholder: 'Location Address...'
        },
        {
          name: 'location-coordinates',
          type: 'text',
          placeholder: 'Location Coordinates...'
        },
        {
          name: 'location-coordinates',
          type: 'text',
          placeholder: 'Location Coordinates...'
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
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}

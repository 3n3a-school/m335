import { Injectable } from '@angular/core';
import { Trip } from "./trips.model";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  trips: Trip[] = [
    { id: 1, title: "Test #1", location: { name: "Our Fav Location", address: "Street 1", coordinates: {lat: "123", lon: "1123"} }, image: { name: "Test Image", url: "https://source.unsplash.com/random"}, stars: 5 },
    { id: 2, title: "Test #2", location: { name: "Our Fav Location", address: "Street 1", coordinates: {lat: "123", lon: "1123"} }, image: { name: "Test Image", url: "https://source.unsplash.com/random"}, stars: 5 },
    { id: 3, title: "Test #3", location: { name: "Our Fav Location", address: "Street 1", coordinates: {lat: "123", lon: "1123"} }, image: { name: "Test Image", url: "https://source.unsplash.com/random"}, stars: 5 }
  ];

  constructor() { }

  getTrips() {
    return this.trips
  }

  getTrip(id: Number) {
    return this.trips.filter(trip => trip.id === id)[0]
  }
}

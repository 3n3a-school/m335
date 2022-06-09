import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { Trip } from '../trips.model';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage implements OnInit {

  trip: Trip

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    let tripId: Number = Number(this.route.snapshot.paramMap.get('id'));
    this.trip = this.tripService.getTrip(tripId)
  }

}

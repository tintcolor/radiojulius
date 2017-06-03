import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocationService } from '../../app/services/location.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [LocationService],
  styles: [`
    .sebm-google-map-container {
  height: 300px;
}
`
  ]
})
export class AboutPage implements OnInit {

  title: string = 'Your location on the map';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 13;
  //IP: any;
  currentLocation: Object

  constructor(public navCtrl: NavController,
              private _locationService:LocationService) {

  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude,
                this.lng = position.coords.longitude
      })
    }
  }

  ngOnInit() {
    this.getCurrentLocation();
    //this._locationService.getMyIp()
    // .then((IP) => {
    //   this.IP = IP
    //   console.log(IP);
    // })
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const IP_URL = 'http://ip.jsontest.com/?callback=showMyIP';

@Injectable()
export class LocationService {
    constructor(private _http: Http) {

    }

    // test get JSON from endpoint with promise
    // getMyIp() {
    //     return this._http.get(IP_URL)
    //     .map((response:Response) => {
    //         response.json();
    //     })
    //     .toPromise();
    // }

    // getCurrentLocation() {
    //     if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition;
    //     }
    // }

}

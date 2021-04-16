import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFlightModel } from '../models/flightinfo-model';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightsUrl = 'https://tw-frontenders.firebaseio.com/advFlightSearch.json';
  flightDetails = [];
  constructor(private _http: HttpClient) { }
  getFlightDetails() {
    this._http.get<IFlightModel[]>(this.flightsUrl).subscribe(res => {
      this.flightDetails = res;
    });
    return this.flightDetails;
  }
}

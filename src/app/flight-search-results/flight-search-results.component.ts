import { Component, Input, OnInit } from '@angular/core';
import { IFlightModel } from '../models/flightinfo-model';

@Component({
  selector: 'app-flight-search-results',
  templateUrl: './flight-search-results.component.html',
  styleUrls: ['./flight-search-results.component.scss']
})
export class FlightSearchResultsComponent implements OnInit {
  @Input() flightResults: IFlightModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.flightResults);
  }

}

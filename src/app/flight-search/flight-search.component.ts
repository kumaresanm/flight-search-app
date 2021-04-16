import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IFlightModel } from '../models/flightinfo-model';
import { FlightService } from '../services/flight.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  tabs = ['One Way', 'Return'];
  criteriaForm: FormGroup;
  flightResultsArr: Array<IFlightModel[]> = [];
  displayRetField: boolean = false;
  cities = ['Pune (PNQ)', 'Mumbai (BOM)', 'Bengaluru (BLR)', 'Delhi (DEL)'];
  flight: IFlightModel;
  minDate: Date;
  filteredCityOptions: Observable<string[]>;
  constructor(private _flightService: FlightService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.minDate = new Date();
    this.flight = {
      arrivalTime: '',
      date: null,
      departureTime: '',
      destination: '',
      flightNo: '',
      name: '',
      origin: '',
      price: null
    };
    this.flightResultsArr = this._flightService.getFlightDetails();
    this.generateForm();
    console.log(this.flightResultsArr);
  }
  generateForm(): void {
    this.criteriaForm = this.formBuilder.group({
      originCity: [this.flight.origin, Validators.required],
      destCity: [this.flight.destination, Validators.required],
      deprtDate: [this.flight.date, Validators.required]
    });
    this.filteredCityOptions = this.criteriaForm.get('originCity').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  toggleReturn(): void {
    this.displayRetField = true;
  }
  searchFlights() {
    console.log('ín search flights');
  }
}

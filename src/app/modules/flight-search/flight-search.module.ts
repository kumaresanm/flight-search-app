import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from 'src/app/flight-search/flight-search.component';
import { FlightSearchResultsComponent } from 'src/app/flight-search-results/flight-search-results.component';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightSearchResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightSearchModule { }

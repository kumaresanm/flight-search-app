// Model for flight data

export interface IFlightModel {
    arrivalTime: string;
    date: Date;
    departureTime: string;
    destination: string;
    flightNo: string;
    name: string;
    origin: string;
    price: number;
}

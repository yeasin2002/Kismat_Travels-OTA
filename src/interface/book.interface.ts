import { PassengersType, User } from "$interface";

export interface PreBookFlyHubResponse extends Base {
  SearchId: string;
}

export interface BookFlyHubResponse extends Base {
  BookingID: string;
}

export interface PreBookResponse {
  passengers: PassengersType[];
  response: PreBookFlyHubResponse;
  searchId: string;
  user: User;
}

export interface BookResponse {
  passengers: PassengersType[];
  response: BookFlyHubResponse;
  bookingId: string;
  user: User;
}

interface Base {
  Results: Result[];
  Error?: any;
  RePriceStatus: string;
  AppliedPromotion?: any;
}

interface Result {
  Availabilty: number;
  Currency: string;
  Discount: number;
  ExtraServices?: any;
  Fares: Fare[];
  FareType: string;
  HoldAllowed: boolean;
  isMiniRulesAvailable: boolean;
  IsRefundable: boolean;
  LastTicketDate: string;
  PassportMadatory: boolean;
  ResultID: string;
  segments: Segment[];
  TotalFare: number;
  TotalFareWithAgentMarkup: number;
  Validatingcarrier: string;
}

interface Segment {
  TripIndicator: string;
  Origin: Origin;
  Destination: Destination;
  Airline: Airline;
  Baggage: string;
  JourneyDuration: string;
  StopQuantity: string;
  Equipment: string;
  baggageDetails: BaggageDetail[];
  SegmentGroup: number;
}

interface BaggageDetail {
  IsAllPax: boolean;
  PaxType: number;
  Cabin?: any;
  Checkin: string;
}

interface Airline {
  AirlineCode: string;
  AirlineName: string;
  FlightNumber: string;
  BookingClass: string;
  CabinClass: string;
  OperatingCarrier: string;
}

interface Destination {
  Airport: Airport;
  ArrTime: string;
}

interface Origin {
  Airport: Airport;
  DepTime: string;
}

interface Airport {
  AirportCode: string;
  AirportName: string;
  Terminal: string;
  CityCode: string;
  CityName: string;
  CountryCode: string;
  CountryName: string;
}

interface Fare {
  BaseFare: number;
  Tax: number;
  Currency: string;
  OtherCharges: number;
  Discount: number;
  AgentMarkUp: number;
  PaxType: string;
  PassengerCount: number;
  ServiceFee: number;
}

export interface Airport {
  AirportCode: string;
  AirportName: string;
  Terminal: string | null;
  CityCode: string;
  CityName: string;
  CountryCode: string;
  CountryName: string;
}

export interface OriginDestination {
  Airport: Airport;
  DepTime?: string;
  ArrTime?: string;
}

export interface Airline {
  AirlineCode: string;
  AirlineName: string;
  FlightNumber: string;
  BookingClass: string;
  CabinClass: string;
  OperatingCarrier: string;
}

export interface BaggageDetails {
  IsAllPax: boolean;
  PaxType: number;
  Cabin: string | null;
  Checkin: string;
}

export interface Segment {
  TripIndicator: string;
  Origin: OriginDestination;
  Destination: OriginDestination;
  Airline: Airline;
  Baggage: string;
  JourneyDuration: string;
  StopQuantity: string | null;
  Equipment: string;
  baggageDetails: BaggageDetails[];
  SegmentGroup: number;
}

export interface Fare {
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

export interface SearchResponse {
  ResultID: string;
  IsRefundable: boolean;
  Fares: Fare[];
  Discount: number;
  Validatingcarrier: string;
  LastTicketDate: string | null;
  segments: Segment[];
  TotalFare: number;
  TotalFareWithAgentMarkup: number;
  Currency: string;
  Availabilty: number;
  FareType: string;
  isMiniRulesAvailable: boolean;
  HoldAllowed: boolean;
}

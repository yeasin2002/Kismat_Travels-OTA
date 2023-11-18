export interface Fares {
  BaseFare: number;
  Tax: number;
  Currency: string;
  OtherCharges: number;
  Discount: number;
  AgentMarkUp: number;
  PaxType: "Adult" | "Child" | "Infant";
  PassengerCount: number;
  ServiceFee: number;
}

export interface Origin {
  Airport: {
    AirportCode: string;
    AirportName: string;
    Terminal: string;
    CityCode: string;
    CityName: string;
    CountryCode :string;
    CountryName: string;
  };
  DepTime: string;
}

export interface Destination {
  Airport: {
    AirportCode: string;
    AirportName: string;
    Terminal: string | null;
    CityCode: string;
    CityName: string;
    CountryCode: string;
    CountryName: string;
  };
  ArrTime: "2023-11-18T15:55:00";
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
  IsAllPax: true;
  PaxType: 1;
  Cabin: null;
  Checkin: string;
}

export interface segments {
  TripIndicator: string;
  Origin: Origin;
  Destination: Destination;
  Airline: Airline;
  Baggage: string;
  JourneyDuration: string;
  StopQuantity: string;
  Equipment: string;
  baggageDetails: BaggageDetails[];
  SegmentGroup: number;
}

export interface Result {
  PassportMadatory: true;
  ExtraServices: null;
  ResultID: string;
  IsRefundable: true;
  Fares: Fares[];
  Discount: 0;
  Validatingcarrier: string;
  LastTicketDate: null;
  segments: segments[];
  TotalFare: number;
  TotalFareWithAgentMarkup: number;
  Currency: string;
  Availabilty: number;
  FareType: string;
  isMiniRulesAvailable: false;
  HoldAllowed: true;
}
interface Error {
  ErrorCode: number;
  ErrorMessage: string;
}

export interface AirPriceResponse {
  SearchId: string;
  Results: Result;
  Error: Error | null;
  RePriceStatus: string;
}

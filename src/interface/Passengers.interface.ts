export interface PassengersType {
  id: string;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  PaxType: "Adult" | "Child" | "Infant";
  DateOfBirth: string;
  Gender: "Male" | "Female";
  PassportNumber?: string;
  PassportExpiryDate?: string;
  PassportNationality?: string;
  Address1: string;
  Address2?: string;
  CountryCode: string;
  Nationality: string;
  ContactNumber: string;
  Email: string;
  IsLeadPassenger: boolean;
  FFAirline?: string;
  FFNumber?: string;
  Baggage?: string;
  BaggageID?: string;
}

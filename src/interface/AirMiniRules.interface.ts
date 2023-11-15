export interface MiniRules {
  FareRuleType: string;
  Paxtype: "Adult" | "Child" | "Infant";
  CityPair: string;
  CurrencyCode: string;
  isRefundable: true;
  amountRefundableBeforeDeparture: number;
  isRefundablebeforeDeparture: boolean;
  amountrefundableafterDeparture: number;
  isRefundableafterDeparture: boolean;
  isExchangeable: true;
  amountExchangeableBeforeDeparture: number;
  isExchangeableBeforeDeparture: boolean;
  amountExchangeableAfterDeparture: number;
  isExchangeableAfterDeparture: boolean;
  isPercentage: boolean;
  isNoShow: boolean;
}

export interface AirMiniRules {
  miniRules: MiniRules;
  Error: null;
}

export interface AirPromotion {
  PromoCodes:
    | {
        Code: string;
        Currency: string;
        MaxAmount: 200;
        Description: string;
      }[]
    | null;
  Error: {
    Code: number;
    Message: string;
  } | null;
}

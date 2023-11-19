export interface AirPromotion {
  PromoCodes:
    | {
        Code: string;
        Currency: string;
        MaxAmount: 200;
        Description: string;
      }[]
    | null;

  ErrorCode: number | null;
  ErrorMessage: string | null;
}



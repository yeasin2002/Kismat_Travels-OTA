import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface CouponDisplayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CouponDisplay: FC<CouponDisplayProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1>Coupon</h1>
    </div>
  );
};

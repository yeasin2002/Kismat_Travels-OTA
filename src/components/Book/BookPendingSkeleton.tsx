import loaderGif from "$assets/Illustrations/others/Loading.gif";
import Image from "next/image";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface BookPendingSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BookPendingSkeleton: FC<BookPendingSkeletonProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="grid h-screen w-screen place-items-center">
      <Image className="h-60 w-60" src={loaderGif} alt="Loading" />
      <p>Loading, Please Wait For Sometime </p>
    </div>
  );
};

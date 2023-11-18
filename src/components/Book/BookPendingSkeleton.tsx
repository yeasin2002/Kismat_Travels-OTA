import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Skeleton } from "shadcn/components/ui";

interface BookPendingSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BookPendingSkeleton: FC<BookPendingSkeletonProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="flex h-full w-full flex-col items-center justify-center gap-y-3 px-5  py-10">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-40 w-full bg-gray-400 shadow-xl " />
      ))}
    </div>
  );
};

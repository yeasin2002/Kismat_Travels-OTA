import { HTMLAttributes } from "react";
import { cn } from "shadcn/lib/utils";

interface SearchValueProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  extra?: string;
}

export const StatCard = ({ title, value, extra, ...rest }: SearchValueProps) => {
  return (
    <div
      className={cn(
        "h-full w-full rounded-md border border-gray-300/60 bg-white px-2 py-1 text-sm text-gray-700",
        extra
      )}
      {...rest}
    >
      <p className={cn("line-clamp-1 font-bold")}>{title}</p>
      <p className={cn("line-clamp-1 text-sm text-slate-950/90")}>{value}</p>
    </div>
  );
};

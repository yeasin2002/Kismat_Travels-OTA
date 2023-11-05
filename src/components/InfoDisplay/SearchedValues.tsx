import { HTMLAttributes } from "react";

interface SearchValueProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
}

export const SearchedValues = ({ title, value, ...rest }: SearchValueProps) => {
  return (
    <div className="w-full space-y-1 rounded-sm bg-gray-100 p-1 sm:space-y-3 sm:p-2" {...rest}>
      <p className="text-xl font-bold text-blue-950">{title}</p>
      <p className="font-semibold text-gray-500 ">{value}</p>
    </div>
  );
};



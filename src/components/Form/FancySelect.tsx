"use client";

import React from "react";
import { cn } from "shadcn/lib/utils";

//  @ts-ignore
interface FancySelectProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  options: string[];
  onSelect: (value: string) => void;
  selected: string;
  expand?: boolean;
}

export function FancySelect({ options, onSelect, selected, expand = false, ...rest }: FancySelectProps) {
  return (
    <div>
      <div className={`flex w-min gap-2 rounded-sm bg-slate-50 p-1 shadow-md ring-1 ring-slate-500/10`}>
        {options.map((value) => {
          return (
            <button
              key={value}
              onClick={() => onSelect(selected === value ? "" : value)}
              className={cn(
                `flex h-8 w-8 items-center justify-center rounded-sm text-black transition-colors duration-200 hover:bg-slate-500/20`,
                {
                  "bg-brandBlue-500 text-white hover:bg-brandBlue-100": selected === value,
                  "w-auto whitespace-nowrap px-2 text-sm": expand,
                }
              )}
              {...rest}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

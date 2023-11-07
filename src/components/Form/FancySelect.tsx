"use client";

import React from "react";
import { cn } from "shadcn/lib/utils";

interface FancySelectStringProps {
  options: string[];
  onSelect: (value: string) => void;
  selected: string;
}

export function FancySelectString({ options, onSelect, selected }: FancySelectStringProps) {
  return (
    <div>
      <div className={`flex w-fit flex-wrap gap-2 rounded-sm bg-slate-50 p-1 shadow-md ring-1 ring-slate-500/10`}>
        {options.map((value) => {
          return (
            <button
              key={value}
              onClick={() => onSelect(selected === value ? "Economy/Premium Economy" : value)}
              className={cn(
                "flex h-8 w-auto items-center justify-center whitespace-nowrap rounded-sm px-2 text-sm text-black transition-colors duration-200 hover:bg-slate-500/20",
                {
                  "bg-brandBlue-500 text-white hover:bg-brandBlue-100": selected === value,
                }
              )}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface FancySelectProps {
  options: number[];
  onSelect: (value: number) => void;
  selected: number;
}

export function FancySelect<T extends number | string>({ options, onSelect, selected }: FancySelectProps) {
  return (
    <div>
      <div className={`flex w-fit flex-wrap gap-2 rounded-sm bg-slate-50 p-1 shadow-md ring-1 ring-slate-500/10`}>
        {options.map((value) => {
          return (
            <button
              key={value}
              onClick={() => onSelect(selected === value ? 0 : value)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-sm text-black transition-colors duration-200 hover:bg-slate-500/20",
                {
                  "bg-brandBlue-500 text-white hover:bg-brandBlue-100": selected === value,
                }
              )}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function cb(...args: any): any {}

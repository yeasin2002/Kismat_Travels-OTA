"use client";

import { FancySelect } from "$components";
import { Button } from "shadcn/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";

interface TravelerAndClassesProps {
  travelerAndClasses: {
    adults: string;
    children: string;
    infants: string;
    travelClass: string;
  };
  onValueChange: (value: Partial<TravelerAndClassesProps["travelerAndClasses"]>) => void;
}

export function TravelersAndClass({ onValueChange, travelerAndClasses }: TravelerAndClassesProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" asChild>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
          <div className="col-span-2">
            <p className="font-medium uppercase text-slate-700">ADULTS (12y +)</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.adults}
              onSelect={(adults) => onValueChange({ adults })}
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", ">9"]}
            />
          </div>
          <div>
            <p className="font-medium uppercase text-slate-700">CHILDREN (2y - 12y )</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.children}
              onSelect={(children) => onValueChange({ children })}
              options={["1", "2", "3", "4", "5", "6", ">6"]}
            />
          </div>
          <div>
            <p className="font-medium uppercase text-slate-700">INFANTS (below 2y)</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.infants}
              onSelect={(infants) => onValueChange({ infants })}
              options={["1", "2", "3", "4", "5", "6", ">6"]}
            />
          </div>
          <div className="col-span-2">
            <p className="mb-2 font-medium uppercase text-slate-700">CHOOSE TRAVEL CLASS</p>
            <FancySelect
              selected={travelerAndClasses.travelClass}
              onSelect={(travelClass) => onValueChange({ travelClass })}
              options={["Economy/Premium Economy", "Premium Economy", "Economy"]}
              expand
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

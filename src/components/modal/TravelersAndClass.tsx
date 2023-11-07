import { FancySelect, FancySelectString } from "$components";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";

interface TravelerAndClassesProps {
  travelerAndClasses: {
    adults: number;
    children: number;
    infants: number;
    travelClass: string;
  };
  onValueChange: (value: Partial<TravelerAndClassesProps["travelerAndClasses"]>) => void;
}

export function TravelersAndClass({ onValueChange, travelerAndClasses }: TravelerAndClassesProps) {
  const totalTravelers = travelerAndClasses.adults + travelerAndClasses.children + travelerAndClasses.infants;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          role="button"
          className="h-full w-full rounded-md border border-gray-300/60 bg-white p-2 px-4 text-gray-700 "
        >
          <div className="flex items-center gap-1 text-sm">
            <p>Travelers & Class</p> <ChevronDown strokeWidth={1} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-950/90">{totalTravelers} Travelers</p>
            <p className="text-sm ">{travelerAndClasses.travelClass}</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit max-sm:max-w-[calc(100vw_-_1rem)]" asChild>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
          <div className="col-span-2">
            <p className="font-medium uppercase text-slate-700">ADULTS (12y +)</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.adults}
              onSelect={(adults) => onValueChange({ adults })}
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
          </div>
          <div className="max-md:col-span-2">
            <p className="font-medium uppercase text-slate-700">CHILDREN (2y - 12y )</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.children}
              onSelect={(children) => onValueChange({ children })}
              options={[0, 1, 2, 3, 4, 5, 6]}
            />
          </div>
          <div className="max-md:col-span-2">
            <p className="font-medium uppercase text-slate-700">INFANTS (below 2y)</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.infants}
              onSelect={(infants) => onValueChange({ infants })}
              options={[0, 1, 2, 3, 4, 5, 6]}
            />
          </div>
          <div className="col-span-2">
            <p className="mb-2 font-medium uppercase text-slate-700">CHOOSE TRAVEL CLASS</p>
            <FancySelectString
              selected={travelerAndClasses.travelClass}
              onSelect={(travelClass) => onValueChange({ travelClass })}
              options={["Economy/Premium Economy", "Premium Economy", "Economy"]}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

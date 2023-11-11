import { FancySelect, FancySelectString } from "$components";
import { adultsOptions, cabinClassOption, childrensOptions, infantsOptions } from "$data/travelClasses";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

interface TravelerAndClassesProps {
  travelerAndClasses: {
    adults: number;
    children: number;
    infants: number;
    travelClass: string;
  };
  onValueChange: (value: Partial<TravelerAndClassesProps["travelerAndClasses"]>) => void;
  statOnly?: boolean;
}

export function TravelersAndClass({ onValueChange, travelerAndClasses, statOnly = false }: TravelerAndClassesProps) {
  const totalTravelers = travelerAndClasses.adults + travelerAndClasses.children + travelerAndClasses.infants;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          role="button"
          className={cn("h-full w-full rounded-md border border-gray-300/60 bg-white p-2 px-4 text-gray-700 ", {
            "h-fit px-2 py-1": statOnly,
          })}
        >
          <div className={cn("flex items-center gap-1 text-sm", { "font-bold": statOnly })}>
            <p>Travelers & Class</p> <ChevronDown strokeWidth={1} size={18} />
          </div>
          <div className={cn("flex flex-col", { "flex-row gap-x-1": statOnly })}>
            <span
              className={cn("text-2xl font-bold text-slate-950/90", { "line-clamp-1 text-sm font-normal": statOnly })}
            >
              {totalTravelers} Travelers
            </span>
            <span className="line-clamp-1 text-sm">{travelerAndClasses.travelClass}</span>
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
              options={adultsOptions}
            />
          </div>
          <div className="max-md:col-span-2">
            <p className="font-medium uppercase text-slate-700">CHILDREN (2y - 12y )</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.children}
              onSelect={(children) => onValueChange({ children })}
              options={childrensOptions}
            />
          </div>
          <div className="max-md:col-span-2">
            <p className="font-medium uppercase text-slate-700">INFANTS (below 2y)</p>
            <p className="mb-2 text-slate-400">on the day of travel</p>
            <FancySelect
              selected={travelerAndClasses.infants}
              onSelect={(infants) => onValueChange({ infants })}
              options={infantsOptions}
            />
          </div>
          <div className="col-span-2">
            <p className="mb-2 font-medium uppercase text-slate-700">CHOOSE TRAVEL CLASS</p>
            <FancySelectString
              selected={travelerAndClasses.travelClass}
              onSelect={(travelClass) => onValueChange({ travelClass })}
              options={cabinClassOption}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

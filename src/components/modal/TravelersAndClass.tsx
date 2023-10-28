import { FancySelect } from "$components";
import { useOneWay } from "$store";
import { ChevronDown } from "lucide-react";
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
  const totalTravelers =
    Number(travelerAndClasses.adults) + Number(travelerAndClasses.children) + Number(travelerAndClasses.infants);

  console.log(typeof totalTravelers);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className=" h-full w-full   rounded-md border border-gray-300/60 bg-white p-2 shadow-md">
          <div className="flex gap-2">
            <p className="mb-2 text-base font-semibold">Travelers & Class</p> <ChevronDown />
          </div>
          <div className="space-y-1">
            <p>{totalTravelers} Travelers</p>
            <p>{travelerAndClasses.travelClass}</p>
          </div>
          {/* Adult :12 Children : 4 Infant :5 Travel Class : Economy */}
        </div>
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

import { SelectAirport } from "$components/SelectAirport/SelectAirport";
import { useOneWay } from "$store";
import { useId } from "react";
import { DatePicker } from "shadcn/components/ui/date-picker";

import { Plus } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ListOfMultiCityProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ListOfMultiCity: FC<ListOfMultiCityProps> = ({ ...rest }) => {
  const store = useOneWay();
  const id = useId();
  return (
    <div {...rest}>
      <div className="grid grid-cols-4 items-center gap-4" key={id}>
        <SelectAirport
          placeholder="From"
          selected={store.from}
          onSelect={store.setFrom}
          searchValue={store.searchFrom}
          setSearchValue={store.setSearchFrom}
        />

        <SelectAirport
          placeholder="To"
          selected={store.to}
          onSelect={store.setTo}
          searchValue={store.searchTo}
          setSearchValue={store.setSearchTo}
        />

        <div className="flex h-full w-full flex-col justify-between gap-y-2">
          <DatePicker selected={store.departure} onSelect={store.setDeparture} placeholder="Departure" />
          <DatePicker selected={store.back} onSelect={store.setBack} placeholder="Return" disabled={true} />
        </div>
        <div className="grid h-full w-full place-items-center rounded-lg bg-white">
          <div className="   rounded-full bg-blue-600 p-2">
            <Plus color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

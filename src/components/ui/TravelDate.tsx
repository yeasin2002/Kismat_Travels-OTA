import { Fragment } from "react";
import { Button, buttonVariants } from "shadcn/components/ui/button";
import { DatePicker } from "shadcn/components/ui/date-picker";
import { cn } from "shadcn/lib/utils";

interface departureProps {
  departure: Date | undefined;
  departurePlaceholder: string;
  setDeparture: (value: Date | undefined) => void;
}

interface backProps {
  back: Date | undefined;
  backPlaceholder: string;
  setBack: (value: Date | undefined) => void;
}

interface ExpandTrueProps extends backProps, departureProps {
  expand: true;
}

interface ExpandFalseProps extends departureProps {
  expand: false;
}

export function TravelDate(props: ExpandTrueProps | ExpandFalseProps) {
  return (
    <div className="flex min-h-[5.875rem] w-full justify-between overflow-hidden rounded-lg [&>*]:flex-1">
      <DatePicker
        selected={props.departure}
        onSelect={props.setDeparture}
        placeholder={props.departurePlaceholder}
        Trigger={Trigger}
      />
      {props.expand && (
        <DatePicker
          selected={props.back}
          onSelect={props.setBack}
          placeholder={props.backPlaceholder}
          Trigger={Trigger}
        />
      )}
    </div>
  );
}

function Trigger({ selected, placeholder }: { selected: Date | undefined; placeholder: string }) {
  const currentDate = {} as Partial<Record<"day" | "month" | "year" | "week", any>>;

  if (selected) {
    currentDate.day = selected.getDate();
    currentDate.month = selected.toLocaleString("default", { month: "short" });
    currentDate.year = selected.getFullYear().toString().substring(0, 2);
    currentDate.week = selected.toLocaleDateString("en-US", { weekday: "long" });
  }

  return (
    <div
      className={cn(
        buttonVariants({
          className: "h-full w-full justify-start rounded-none text-left text-sm font-normal",
          variant: "outline",
        })
      )}
    >
      <label className="flex h-full w-full flex-col text-gray-900">
        <span className="mb-1 truncate text-sm text-gray-700">{placeholder}</span>

        {selected ? (
          <Fragment>
            <p className="mt-auto space-x-1 [&>*]:leading-3">
              <span className={cn("truncate text-2xl font-bold text-slate-950/90")}>{currentDate.day}</span>
              <span className={cn("-mt-1 truncate text-base font-medium")}>{currentDate.month}</span>
              <span className={cn("-mt-1 truncate text-base font-medium ")}>{currentDate.year}</span>
            </p>
            <p className="mb-auto truncate text-sm text-gray-700">{currentDate.week}</p>
          </Fragment>
        ) : (
          <span className={cn("truncate whitespace-break-spaces text-sm font-bold text-slate-950/50")}>
            Select {placeholder?.toLowerCase()} date
          </span>
        )}
      </label>
    </div>
  );
}

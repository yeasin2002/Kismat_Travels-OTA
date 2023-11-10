"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { Button, buttonVariants } from "shadcn/components/ui/button";
import { Calendar } from "shadcn/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

interface DatePickerProps {
  selected: Date | undefined;
  onSelect: (value: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  Trigger?: React.FC<{ selected: Date | undefined, placeholder: string }>;
}

export function DatePicker({
  selected,
  onSelect,
  placeholder = "Pick a date",
  disabled = false,
  Trigger,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        {Trigger ? (
          <Trigger selected={selected} placeholder={placeholder} />
        ) : (
          <div
            className={cn(buttonVariants({ variant: "outline", className: "w-full justify-start text-left text-sm font-normal"}), { "text-slate-700": !selected })}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-slate-700" />
            {selected ? format(selected, "PPP") : <span>{placeholder}</span>}
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={disabled}
          mode="single"
          selected={selected}
          onSelect={(args) => {
            setIsOpen(false);
            onSelect(args);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

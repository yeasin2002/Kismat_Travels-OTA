"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "shadcn/components/ui/button";
import { Calendar } from "shadcn/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

interface DatePickerProps {
  selected: Date | undefined;
  onSelect: (value: Date | undefined) => void;
  placeholder?: string;
}

export function DatePicker({ selected, onSelect, placeholder = "Pick a date" }: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-[280px] justify-start text-left font-normal", !selected && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? format(selected, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
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

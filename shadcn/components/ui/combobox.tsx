"use client";

import { AirportData } from "$interface/airport.interface";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import useMeasure from "react-use-measure";

import { Button } from "shadcn/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "shadcn/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

export interface ComboboxProps {
  selected: AirportData | null;
  onSelect: (value: AirportData | null) => void;
  options: (AirportData & { element?: React.ReactNode })[];
  placeholder: string;
  notFoundMessage?: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  size?: number;
}

export function Combobox({
  options,
  placeholder,
  selected,
  onSelect,
  searchValue,
  setSearchValue,
  notFoundMessage = "No option found.",
  size,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [ref, bound] = useMeasure();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          style={{ width: size ? `${size}rem` : "100%" }}
          className=" justify-between"
          ref={ref}
        >
          {selected ? selected.name : <span className="text-muted-foreground">{placeholder}</span>}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{ width: size ? `${size}rem` : bound.width > 0 ? `${bound.width}px` : "auto" }}
        className="p-0"
      >
        <Command>
          <CommandInput placeholder={"Search"} value={searchValue} onValueChange={(value) => setSearchValue(value)} />
          <CommandEmpty>{notFoundMessage}</CommandEmpty>
          <CommandGroup>
            {options.map(({ id, name, country, code, element }) => (
              <CommandItem
                key={id}
                value={name}
                onSelect={() => {
                  onSelect({ id, name, country, code });
                  setOpen(false);
                }}
              >
                {element ? (
                  <React.Fragment>
                    <Check className={cn("mr-2 h-4 w-4", name === selected?.name ? "opacity-100" : "opacity-0")} />
                    {element}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Check className={cn("mr-2 h-4 w-4", name === selected?.name ? "opacity-100" : "opacity-0")} />
                    {name}
                  </React.Fragment>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

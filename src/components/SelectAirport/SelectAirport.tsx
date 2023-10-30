import { ComboBoxItem } from "$components";
import { useAirports } from "$hooks/useAirports";
import { useMemo } from "react";
import { Combobox, ComboboxProps } from "shadcn/components/ui/combobox";

export function SelectAirport({
  selected,
  onSelect,
  setSearchValue,
  searchValue,
  placeholder,
  notFoundMessage,
  size,
}: Omit<ComboboxProps, "options">) {
  const { data, isLoading } = useAirports(searchValue);

  const options = useMemo(() => {
    if (data)
      return data.map(({ code, country, id, name }) => ({
        code,
        name,
        id,
        country,
        element: <ComboBoxItem key={id} code={code} title={country} subtitle={name} />,
      }));

    return [];
  }, [data]);

  return (
    <Combobox
      options={options}
      placeholder={placeholder}
      selected={selected}
      onSelect={onSelect}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      size={size}
      notFoundMessage={isLoading ? "Loading ..." : notFoundMessage}
    />
  );
}

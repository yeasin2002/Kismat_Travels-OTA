import { AirportData } from "$interface/airport.interface";
import { GET } from "$lib/request";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

async function queryFn(search: string): Promise<AirportData[]> {
  const { data } = await GET(`airports?q=${encodeURIComponent(search)}&docs-per-page=5`);

  return data;
}

export function useAirports(search: string) {
  const [key] = useDebounce(search, 200);

  return useQuery({
    queryKey: ["airport", key],
    queryFn: ({ queryKey }) => queryFn(queryKey[1]),
  });
}

import { AirportData } from "$interface/airport.interface";
import { GET } from "$lib/request";
import { useQuery } from "@tanstack/react-query";

async function queryFn(search: string): Promise<AirportData[]> {
  const { data } = await GET(`airports?q=${encodeURIComponent(search)}&docs-per-page=10`);

  return data;
}

export function useAirports(search: string) {
  return useQuery({ queryKey: ["airport", search], queryFn: ({ queryKey }) => queryFn(queryKey[1]) });
}

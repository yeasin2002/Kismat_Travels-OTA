import { AirportData } from "$interface/airport.interface";
import { GET } from "$lib/request";
import { useEffect, useState } from "react";
import cookie from "js-cookie";

export function useGetProfit() {
  const [Load, SetLoad] = useState(false);
  const [Data, SetData] = useState<any>(null);
  const [Error, SetError] = useState<any>(false);
  const [Reload, SetReload] = useState(0);
  // !Auth?.key && !Auth?.sessions
  async function queryFn(): Promise<any> {
    try {
      SetLoad(true);
      const { data } = await GET("/profit/get_information");
      SetData(data);
      SetLoad(false);
    } catch (error) {
      SetError(error);
      SetLoad(false);
    }
  }

  useEffect(() => {
    queryFn();
  }, [Reload]);

  return {
    data: Data,
    error: Error,
    Reload: () => {
      SetReload((e) => 1 + e);
    },
    isLoading: Load,
  };
}

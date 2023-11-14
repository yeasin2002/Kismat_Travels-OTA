import { GET } from "$lib";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ProfitContext = createContext<{ profit: { $user: number; $agent: number } | null } | null>(null);

export function ProfitProvider({ children }: { children: React.ReactNode }) {
  const { data, isSuccess } = useQuery({
    queryKey: ["profit"],
    queryFn: () => GET("profit/get_information"),
    staleTime: 0,
  });

  return (
    <ProfitContext.Provider
      value={
        isSuccess ? { profit: { $agent: data.data.agent_profit, $user: data.data.user_profit } } : { profit: null }
      }
    >
      {children}
    </ProfitContext.Provider>
  );
}

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useSmoothScroll } from "$hooks";

const queryClient = new QueryClient();

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

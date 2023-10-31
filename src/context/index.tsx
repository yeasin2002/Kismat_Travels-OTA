"use client";

import { useSmoothScroll } from "$hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "shadcn/components/ui/toaster";

const queryClient = new QueryClient();

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
    </QueryClientProvider>
  );
}

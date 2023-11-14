import { PageLoading } from "$components";
import { useSmoothScroll } from "$hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

import { AuthProvider } from "./auth-provider";
import { ProfitProvider } from "./profit-provider";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 100,
      },
    },
  });

  useSmoothScroll();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ProfitProvider>
          {children}
          <Toaster richColors />
          <ReactQueryDevtools initialIsOpen={false} />
          <PageLoading />
        </ProfitProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export * from "./auth-provider";
export * from "./profit-provider";

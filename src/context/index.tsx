import { PageLoading } from "$components";
import { useSmoothScroll } from "$hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster, toast } from "sonner";

import { AuthProvider } from "./auth-provider";

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
        {children}

        <Toaster richColors />
        <ReactQueryDevtools initialIsOpen={false} />
        <PageLoading />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export * from "./auth-provider";


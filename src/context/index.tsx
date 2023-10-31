import { useSmoothScroll } from "$hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "shadcn/components/ui/toaster";
import { AuthProvider } from "./auth-provider";

const queryClient = new QueryClient();

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export * from "./auth-provider";

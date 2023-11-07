import { Destination, Faq, Footer, Hero, InfoDisplay, Nav, Process, ShowCase } from "$components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function () {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 100,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <main>
        <Nav />
        <Hero />
        <Destination />
        <ShowCase />
        <Process />
        <InfoDisplay />
        <Faq />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}

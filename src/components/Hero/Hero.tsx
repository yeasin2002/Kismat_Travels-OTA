import heroImg from "$assets/cover/hero-cover.jpg";
import { Button, MultiCity, OneWay, TripType, TwoWay } from "$components";
import { POST } from "$lib";
import { useTripType } from "$store";
import { useMutation } from "@tanstack/react-query";
import { Search } from "lucide-react";

export const Hero = () => {
  const postFetcher = async (data: any) => {
    const { data: response } = await POST("flights", data);
    return response;
  };

  const tripType = useTripType();
  const { mutateAsync } = useMutation({
    mutationFn: postFetcher,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const SearchHandler = async () => {
    try {
      const data = {
        AdultQuantity: 0,
        ChildQuantity: 0,
        InfantQuantity: 0,
        EndUserIp: "",
        JourneyType: "1",
        Segments: [],
        Origin: "",
        Destination: "",
        CabinClass: "",
        DepartureDateTime: "",
        PreferredAirlines: "",
        ExcludeAirlines: "",
      };
      const currentStore = tripType.getCurrentStore();

      console.log(currentStore);
      await mutateAsync(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section
      className="min-h-[calc(100vh-3.5rem)] bg-cover bg-center bg-no-repeat py-28"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <div className="container">
        <div className="space-y-4 rounded-md border border-slate-200 bg-white/80 px-4 py-8 shadow-sm backdrop-blur-lg ">
          <TripType />
          <div className="w-full pb-2">
            {tripType.tripType === "one-way" && <OneWay />}
            {tripType.tripType === "round-tripe" && <TwoWay />}
            {tripType.tripType === "multi-city" && <MultiCity />}
            <div className="absolute -bottom-6 mt-2 flex w-full items-center justify-center ">
              <Button
                className="gap-2 rounded-full bg-[linear-gradient(93deg,rgb(83,178,254),rgb(6,90,243))] px-12 shadow-sm"
                onClick={SearchHandler}
              >
                <Search className="text-white/90" size={18} strokeWidth={2.5} />
                <span className="text-lg font-bold uppercase tracking-wide">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

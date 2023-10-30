import heroImg from "$assets/cover/hero-cover.jpg";
import { Button, MultiCity, OneWay, TripType, TwoWay } from "$components";
import { tripType } from "$store";
import { Search, SearchCheck } from "lucide-react";

export const Hero = () => {
  const store = tripType();

  return (
    <section
      className="h-[calc(100vh-3.5rem)] bg-cover bg-center bg-no-repeat pt-28"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <div className="container">
        <div className="space-y-4 rounded-md border border-slate-200 bg-white/80 px-4 py-8 shadow-sm backdrop-blur-lg ">
          <TripType />
          <div className="w-full pb-2">
            {store.tripType === "one-way" && <OneWay />}
            {store.tripType === "round-tripe" && <TwoWay />}
            {store.tripType === "multi-city" && <MultiCity />}
            <div className="absolute -bottom-6 mt-2 flex w-full items-center justify-center ">
              <Button className="gap-2 rounded-full bg-[linear-gradient(93deg,rgb(83,178,254),rgb(6,90,243))] px-12 shadow-sm">
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

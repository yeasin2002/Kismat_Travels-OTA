import heroImg from "$assets/cover/hero-cover.jpg";
import { Button, MultiCity, OneWay, TripType, TwoWay } from "$components";
import { tripType } from "$store";
import { SearchCheck } from "lucide-react";

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
              <Button className="flex items-center justify-center gap-x-3 rounded-lg border border-transparent bg-brandBlue-100 px-8 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-brandBlue-600 sm:text-base ">
                <span>Search </span>
                <SearchCheck className="text-xm text-white/90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

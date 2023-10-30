import heroImg from "$assets/cover/hero-cover.jpg";
import { MultiCity, OneWay, TripType, TwoWay } from "$components";
import { tripType } from "$store";

export const Hero = () => {
  const store = tripType();
  return (
    <main
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <section className="space-y-4 rounded-md border border-slate-200 bg-white/80 px-4 py-8 shadow-sm backdrop-blur-lg ">
        <TripType />
        {store.tripType === "one-way" && <OneWay />}
        {store.tripType === "round-tripe" && <TwoWay />}
        {store.tripType === "multi-city" && <MultiCity />}
      </section>
    </main>
  );
};

import heroImg from "$assets/Hero.jpeg";
import { Nav } from "$components";

export const Hero = () => {
  return (
    <main
      className="h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <Nav />

      <div className="text-gray-300s flex h-full  w-full   flex-col items-center justify-center gap-x-4 px-5">
        <p className=" text-sm font-semibold   text-slate-200 sm:text-lg">DISCOVER YOU NEXT </p>
        <h1
          className="bg-gradient-to-r from-gray-100 to-gray-300
          bg-clip-text text-4xl font-extrabold text-gray-50 text-transparent sm:text-7xl
          lg:text-9xl 
        "
        >
          ADVENTURE
        </h1>
        <p className="mx-auto mt-3 max-w-[70ch] text-center  text-base text-slate-200  [text-wrap:balance] sm:mt-1 sm:px-10  lg:text-lg ">
          Experience the thrill of exploring the world's most fascinating destinations with our expertly curated travel
          packages
        </p>
      </div>
    </main>
  );
};

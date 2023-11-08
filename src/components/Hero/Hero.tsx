import heroImg from "$assets/cover/hero-cover.jpg";
import { Button, MultiCity, OneWay, TripType, TwoWay } from "$components";
import { useTripType } from "$store";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { buttonVariants } from "shadcn/components/ui/button";
import { cn } from "shadcn/lib/utils";
import { toast } from "sonner";

export const Hero = () => {
  const router = useRouter();
  const { getCurrentStore, tripType } = useTripType();

  const SearchHandler = async () => {
    try {
      const storeValue = getCurrentStore();
      if (!storeValue) {
        return toast.warning("Please fill up all  the fields");
      }

      return await router.push("/search");
    } catch (error: any) {
      console.log("Hero: Error ", error.message);
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
            {tripType === "one-way" && <OneWay />}
            {tripType === "round-tripe" && <TwoWay />}
            {tripType === "multi-city" && <MultiCity />}
            <div className="absolute -bottom-6 mt-2 flex w-full items-center justify-center ">
              <Button
                className={cn(
                  buttonVariants({
                    className:
                      "gap-2 rounded-full bg-[linear-gradient(93deg,rgb(83,178,254),rgb(6,90,243))] px-12 py-6 shadow-sm",
                  })
                )}
                onClick={SearchHandler}
              >
                <Search className="text-white/90" size={18} strokeWidth={2.5} />
                <span className="text-lg font-bold uppercase tracking-wide">search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

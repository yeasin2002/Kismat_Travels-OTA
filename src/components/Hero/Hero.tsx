import Link from "next/link";

import { $post } from "$/utils";
import heroImg from "$assets/cover/hero-cover.jpg";
import { Button, MultiCity, OneWay, TripType, TwoWay } from "$components";
import { POST } from "$lib";
import { useTripType } from "$store";
import { useMutation } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { buttonVariants } from "shadcn/components/ui/button";
import { useToast } from "shadcn/components/ui/use-toast";
import { cn } from "shadcn/lib/utils";

export const Hero = () => {
  const { getCurrentStore, tripType } = useTripType();
  const { toast } = useToast();

  const { mutateAsync, data, error } = useMutation({
    mutationKey: ["airSearchRequest"],
    mutationFn: (data: any) => $post("private/AirSearch", data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const SearchHandler = async () => {
    try {
      const storeValue = getCurrentStore();
      if (!storeValue) {
        return toast({
          title: "Enter valid data",
        });
      }
      await mutateAsync(getCurrentStore());
    } catch (error: any) {
      console.log("error", error.message);
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
                      "gap-2 rounded-full bg-[linear-gradient(93deg,rgb(83,178,254),rgb(6,90,243))] px-12 shadow-sm",
                  })
                )}
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

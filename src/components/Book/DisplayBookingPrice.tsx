import { $post } from "$/utils";
import { usePassengers } from "$store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import { useRouter } from "next/router";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useEffect } from "react";
import { useNavigation } from "react-day-picker";
import { Skeleton } from "shadcn/components/ui";
import { toast } from "sonner";

interface DisplayBookingPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DisplayBookingPrice: FC<DisplayBookingPriceProps> = ({ ...rest }) => {
  const router = useRouter();

  const { flightBooking, resultId, searchId } = usePassengers();
  const { mutate, isPending, data } = useMutation({
    mutationKey: ["private/AirPrice"],
    mutationFn: ({ SearchID, ResultID }: { SearchID: string; ResultID: string }) =>
      $post("/private/AirPrice", { SearchID, ResultID }),
  });

  useEffect(() => {
    mutate({ ResultID: resultId || "", SearchID: searchId || "" });
  }, []);
  if (data?.Error?.RePriceStatus === "FareUnavailable") {
    toast("Fare Unavailable");
  }
  if (!searchId) {
    toast("Fare Unavailable");
    router.push("/");
  }
  console.log(data);
  return (
    <Fragment>
      {isPending ? (
        <Skeleton className="h-40 w-full " />
      ) : (
        <div {...rest}>
          <div>
            <h2 className=" p-5 text-2xl font-bold text-white">Complete Your Booking</h2>
            <div>
              <div className="    rounded-sm bg-gray-100">
                <div className="mx-3 my-5 py-5  shadow-lg  lg:py-8">
                  <div className="mt-10   space-y-8 rounded-lg  bg-gray-200 p-2 sm:mx-4  sm:p-6">
                    <div className="  flex items-center  gap-x-1  sm:gap-x-2  ">
                      {/* <Image src={AirbusLogo} alt="Airbus Logo" className="h-10 w-10" /> */}
                      <p className="font-semibold text-gray-600"> {flightBooking?.Airline?.AirlineName}</p>
                      <span className="rounded-full border border-gray-400 px-2 text-gray-400">
                        {flightBooking?.Airline?.AirlineCode}-{flightBooking?.Airline?.FlightNumber}
                      </span>
                    </div>
                    <div className="space-y-4 ">
                      <p className="flex items-center  gap-x-2 sm:gap-x-4">
                        <PlaneTakeoff />
                        <span className="font-bold">{flightBooking?.Origin?.Airport?.CityName}</span>
                        {flightBooking?.Origin?.Airport?.AirportName}
                      </p>
                      <p className="flex items-center   gap-x-2 sm:gap-x-4">
                        <PlaneLanding />
                        <span className="font-bold">{flightBooking?.Destination?.Airport?.CityName} </span>
                        {flightBooking?.Destination?.Airport?.AirportName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

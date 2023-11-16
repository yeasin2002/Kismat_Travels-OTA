import { $post } from "$/utils";
import { AirMiniRules } from "$interface/AirMiniRules.interface";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

const FlightRules = () => {
  const { resultId, searchId } = usePassengers();
  const { mutate } = useMutation({
    mutationFn: (body: any) => $post("/api/flight-rules", body),
  });

  useEffect(() => {
    mutate({
      SearchId: searchId,
      ResultId: resultId,
    });
  }, []);

  return (
    <div>
      <p className="text-xl font-bold text-blue-500">FlightRules Available</p>
    </div>
  );
};

export default FlightRules;

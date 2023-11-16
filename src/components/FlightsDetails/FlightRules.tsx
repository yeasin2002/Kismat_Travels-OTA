import { $post } from "$/utils";
import miniRules from "$data/FlyHub/Response/MiniRules.json";
import { AirMiniRules } from "$interface/AirMiniRules.interface";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import { Ban, CheckCircle } from "lucide-react";
import { Fragment, useEffect } from "react";

const FlightRules = () => {
  const { resultId, searchId } = usePassengers();
  const { mutate } = useMutation({
    mutationFn: (body: any) => $post("/api/flightRules", body),
  });

  useEffect(() => {
    mutate({
      SearchId: searchId,
      ResultId: resultId,
    });
  }, []);

  return (
    <Fragment>
      {miniRules.miniRules.map((rules) => {
        const miniRuleItems = [
          {
            title: "Refundable",
            value: rules.isRefundable,
            amount: rules.amountRefundableBeforeDeparture,
          },
          {
            title: "Refundable before Departure",
            value: rules.isRefundablebeforeDeparture,
            amount: rules.amountrefundableafterDeparture,
          },
          {
            title: "Refundable after Departure",
            value: rules.isRefundableafterDeparture,
            amount: null,
          },
          {
            title: "Exchangeable",
            value: rules.isExchangeable,
            amount: rules.amountExchangeableBeforeDeparture,
          },
          {
            title: "Exchangeable Before Departure",
            value: rules.isExchangeableBeforeDeparture,
            amount: rules.amountExchangeableAfterDeparture,
          },
          {
            title: "Exchangeable After Departure",
            value: rules.isExchangeableAfterDeparture,
            amount: null,
          },
          {
            title: "Percentage",
            value: rules.isPercentage,
            amount: null,
          },
          {
            title: "NoShow",
            value: rules.isNoShow,
            amount: null,
          },
        ];

        return (
          <div className="space-y-8 px-8 py-8">
            <p className="text-xl font-bold  text-blue-500">{rules.CityPair}</p>
            <div>
              {rules.isRefundable ? (
                <div>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                      <tbody>
                        {miniRuleItems.map((items) => {
                          return (
                            <tr className="border-b bg-white px-4  hover:bg-gray-50 ">
                              <th scope="row" className="whitespace-nowrap   pl-8 font-medium  text-gray-900">
                                {items.title}
                              </th>
                              <td className="px-6 py-4">
                                {items.value ? <CheckCircle color="rgb(22 101 52 )" /> : <Ban color="rgb(153 27 27)" />}
                              </td>
                              <td className="px-6 py-4">
                                {typeof items.amount === "number" ? items.amount : "Not Applicable"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <p className=" alert-danger  flex gap-x-2 ">
                  <CheckCircle />
                  <span>Non Refundable</span>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default FlightRules;

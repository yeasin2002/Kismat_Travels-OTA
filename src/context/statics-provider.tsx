import { $post } from "$/utils";
import { useQuery } from "@tanstack/react-query";
import cookies from "js-cookie";
import { createContext } from "react";

interface Weeks {
  count: number;
  day: string;
}

interface Years {
  count: number;
  month: string;
}

interface IStatics {
  $todays: {
    todaysSearchesCount: number;
    todaysNewUserCount: number;
    todaysBookingsCount: number;
    todaysPreBookingsCount: number;
  };
  $weeks: {
    currentWeeksNewUsers: Weeks[];
    currentWeeksNewBookings: Weeks[];
  };
  $years: {
    year: string;
    currentYearsNewUsers: Years[];
    currentYearsNewBookings: Years[];
  };
}

export const StaticsContext = createContext<IStatics | null>(null);

function getWeeksDefaults() {
  const currentDate = new Date();

  const last7Days = Array.from({ length: 7 }, (_, index) => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - index);
    return { count: 0, day: previousDate.toLocaleDateString("en-US", { weekday: "long" }) };
  });

  return last7Days;
}

function getYearlyDefaults() {
  const currentYear = new Date().getFullYear();

  const last12Months = Array.from({ length: 12 }, (_, index) => {
    const month = new Date(currentYear, index, 1);
    return { count: 0, month: month.toLocaleDateString("en-US", { month: "long" }) };
  });

  return last12Months;
}

const defaultYearlyStatics = getYearlyDefaults();
const defaultWeeklyStatics = getWeeksDefaults();

export function StaticsProvider({ children }: { children: React.ReactNode }) {
  const { data: $todays } = useQuery({
    queryKey: ["statics-todays"],
    queryFn: () =>
      $post("statics/todays", {
        Headers: {
          sessions: cookies.get("value_ad"),
          key: cookies.get("key_ad"),
        },
      }),

    initialData: {
      todaysSearchesCount: 0,
      todaysNewUserCount: 0,
      todaysBookingsCount: 0,
      todaysPreBookingsCount: 0,
    },
  });

  const { data: $weeks } = useQuery({
    queryKey: ["statics-weeks"],
    queryFn: () =>
      $post("statics/weeks", {
        Headers: {
          sessions: cookies.get("value_ad"),
          key: cookies.get("key_ad"),
        },
      }),

    initialData: {
      currentWeeksNewUsers: defaultWeeklyStatics as Weeks[],
      currentWeeksNewBookings: defaultWeeklyStatics as Weeks[],
    },
  });

  const { data: $years } = useQuery({
    queryKey: ["statics-years"],
    queryFn: () =>
      $post("statics/years", {
        Headers: {
          sessions: cookies.get("value_ad"),
          key: cookies.get("key_ad"),
        },
      }),

    initialData: {
      year: new Date().getFullYear().toString(),
      currentYearsNewUsers: defaultYearlyStatics as Years[],
      currentYearsNewBookings: defaultYearlyStatics as Years[],
    },
  });

  return <StaticsContext.Provider value={{ $todays, $years, $weeks }}>{children}</StaticsContext.Provider>;
}

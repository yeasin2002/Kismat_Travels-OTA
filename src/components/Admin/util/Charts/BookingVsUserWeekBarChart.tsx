import { useStatics } from "$hooks";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "User",
      data: [12, 20, 12, 11, 33, 32, 31],
      backgroundColor: "#202020",
    },
    {
      label: "Order",
      data: [20, 30, 40, 1, 22, 31, 22],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function getDataBarOptions(
  arrayUser: { count: number; month: string }[],
  arrayBooking: { count: number; month: string }[],
  backgroundColor = "#202020"
) {
  const labels = arrayUser.map((d) => d["month"]);

  return {
    labels,
    datasets: [
      {
        label: "User",
        data: arrayUser.map((d) => d.count) as any[],
        backgroundColor,
      },
      {
        label: "Booking",
        data: arrayBooking.map((d) => d.count) as any[],
        backgroundColor,
      },
    ],
  };
}

function getDataBarOptionsWeek(
  arrayUser: { count: number; day: string }[],
  arrayBooking: { count: number; day: string }[],
  backgroundColor = "#202020"
) {
  const labels = arrayUser.map((d) => d["day"]);

  return {
    labels,
    datasets: [
      {
        label: "User",
        data: arrayUser.map((d) => d.count) as any[],
        backgroundColor,
      },
      {
        label: "Booking",
        data: arrayBooking.map((d) => d.count) as any[],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
}

export function BookingVsUserYearsBarChart() {
  const { $years } = useStatics();

  return (
    <Bar
      options={options}
      data={{
        labels: $years.currentYearsNewUsers.map((d) => d.month),
        datasets: [
          {
            label: "User",
            data: $years.currentYearsNewUsers.map((d) => d.count) as any[],
            backgroundColor: "#202020",
          },
          {
            label: "Booking",
            data: $years.currentYearsNewUsers.map((d) => d.count) as any[],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
}

export function BookingVsUserWeeksBarChart() {
  const { $weeks } = useStatics();

  return (
    <Bar
      options={options}
      data={{
        labels: $weeks.currentWeeksNewUsers.map((d) => d.day),
        datasets: [
          {
            label: "User",
            data: $weeks.currentWeeksNewUsers.map((d) => d.count) as any[],
            backgroundColor: "#202020",
          },
          {
            label: "Booking",
            data: $weeks.currentWeeksNewBookings.map((d) => d.count) as any[],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
}

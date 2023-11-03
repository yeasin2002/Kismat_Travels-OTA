import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
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

function BookingVsUserWeekBarChart() {
  return <Bar options={options} data={data} />;
}

export default BookingVsUserWeekBarChart;

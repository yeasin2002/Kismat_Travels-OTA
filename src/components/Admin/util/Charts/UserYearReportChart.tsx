import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  cubicInterpolationMode: "monotone",
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Users",
      data: [12, 22, 23, 100, 50, 10, 100, 100, 33, 43, 32],
      borderColor: "#303030",
      backgroundColor: ["#e2e8f099", "#00ff99"],
    },
  ],
};

function UserYearReportChart() {
  return <Line options={options} data={data} />;
}

export default UserYearReportChart;

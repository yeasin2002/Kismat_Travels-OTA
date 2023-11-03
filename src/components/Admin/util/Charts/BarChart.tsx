import React from "react";
const data = [
  { label: "hello", quarter: 1, earnings: 13000 },
  { label: "hello", quarter: 2, earnings: 16500 },
  { label: "hello", quarter: 3, earnings: 14250 },
  { label: "hello", quarter: 4, earnings: 19000 },
  { label: "hello", quarter: 5, earnings: 19000 },
  { label: "hello", quarter: 6, earnings: 19000 },
  { label: "hello", quarter: 7, earnings: 19000 },
  { label: "hello", quarter: 8, earnings: 1900 },
  { label: "hello", quarter: 9, earnings: 19000 },
  { label: "hello", quarter: 10, earnings: 15000 },
  { label: "hello", quarter: 11, earnings: 19000 },
  { label: "hello", quarter: 12, earnings: 19000 },
];

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BarChart = () => {
  return (
    <div className="p-2">
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={months.map((month) => month.slice(0, 3))}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={data} x="quarter" y="earnings" labelComponent={<VictoryTooltip />} />
      </VictoryChart>
    </div>
  );
};

export default BarChart;

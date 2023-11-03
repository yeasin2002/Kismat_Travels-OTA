import React from "react";
const data = [
  { quarter: 1, earnings: 20 },
  { quarter: 2, earnings: 50 },
  { quarter: 3, earnings: 20 },
  { quarter: 4, earnings: 10 },
  { quarter: 5, earnings: 100 },
  { quarter: 6, earnings: 120 },
  { quarter: 7, earnings: 190 },
  { quarter: 8, earnings: 170 },
  { quarter: 9, earnings: 190 },
  { quarter: 10, earnings: 200 },
  { quarter: 11, earnings: 180 },
  { quarter: 12, earnings: 100 },
];

import { VictoryArea, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";
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
        domainPadding={0}
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
          // tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryArea interpolation="natural" data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </div>
  );
};

export default BarChart;

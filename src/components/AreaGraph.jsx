import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { colors } from "../constants/colors";

function AreaGraph({ heading, data }) {
  return (
    <>
      <h2>{heading}</h2>
      <Line
        data={data}
        options={{
          elements: {
            line: {
              tension: 0.5,
              fill: true,
            },
          },
        }}
      />
    </>
  );
}

export default AreaGraph;

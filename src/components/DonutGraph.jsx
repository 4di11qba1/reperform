import React from "react";
import { Doughnut } from "react-chartjs-2";
import { colors } from "../constants/colors";

function DonutGraph({ data, heading }) {
  return (
    <div className="donut-graph">
      <h2>{heading}</h2>
      <div>
        <Doughnut data={data} width={200} height={200} />
      </div>
      <div
        style={{
          width: "100%",
          height: "40px",
          color: colors.controlBTN,
          backgroundColor: colors.controlRevertBTN,
        }}
      >
        Target: ${data.datasets[0].data[0] + data.datasets[0].data[1]}
      </div>
    </div>
  );
}

export default DonutGraph;

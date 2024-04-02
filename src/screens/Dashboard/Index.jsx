import React from "react";
import AreaGraph from "../../components/AreaGraph";
import DonutGraph from "../../components/DonutGraph";
import DashboardCard from "../../components/DashboardCard";
import { colors } from "../../constants/colors";

function Index() {
  return (
    <>
      <div
        className="dashboard-header"
        style={{ backgroundColor: colors.white }}
      >
        <h2 style={{ marginBottom: "20px" }}>Overview</h2>
        <div className="overview">
          {commissionData.map((item, index) => {
            return (
              <DashboardCard
                key={index}
                heading={item.heading}
                value={item.value}
                percentage={item.percentage}
                text={item.text}
                color={item.color}
                bgColor={item.bgColor}
              />
            );
          })}
        </div>
      </div>
      <div className="donut-area-graph-wrapper">
        <div className="graph" style={{ backgroundColor: colors.white }}>
          <DonutGraph data={donutGraphData} heading={"Target Commission"} />
        </div>
        <div
          className="graph"
          style={{
            backgroundColor: colors.white,
            width: "70%",
          }}
        >
          <AreaGraph data={areaGraphData} heading={"Total Sales"} />
        </div>
      </div>
      <div className="graphs-wrapper">
        {graphsList.map((item, index) => {
          return (
            <div
              key={index}
              className="graph"
              style={{ backgroundColor: colors.white }}
            >
              <AreaGraph data={areaGraphData} heading={item.heading} />
            </div>
          );
        })}
      </div>
      <div
        className="graph"
        style={{
          backgroundColor: colors.white,
          alignSelf: "center",
          width: "50%",
        }}
      >
        <AreaGraph data={areaGraphData} heading={"Listings"} />
      </div>
    </>
  );
}

export default Index;

const graphsList = [
  {
    heading: "Doorknocks",
  },
  {
    heading: "Calls",
  },
  {
    heading: "Leads",
  },
  {
    heading: "Listing Presentations",
  },
];

const areaGraphData = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Actual",
      data: [100, 200, 300, 100, 80, 100, 70, 40, 30, 80, 100, 150],
      backgroundColor: "#01b1b16b",
    },
    {
      label: "Target",
      data: [110, 200, 280, 100, 80, 50, 100, 90, 50, 70, 120, 150],
      backgroundColor: "#eef0f879",
    },
  ],
};

//Donut Graph
const donutActual = 150;
const donutTarget = 250;
const donutRemaining = donutTarget - donutActual;

const donutGraphData = {
  labels: ["Actual", "Remaining"],
  datasets: [
    {
      data: [donutActual, donutRemaining],
      backgroundColor: [colors.controlBTN, colors.border],
      hoverOffset: 4,
    },
  ],
};
//Donut Graph

const commissionData = [
  {
    heading: "Total Sales",
    value: "22000000",
    percentage: "+8",
    text: "From Last Month",
    color: "#31CECE",
    bgColor: "#E5F6F6",
  },
  {
    heading: "Actual Commission",
    value: "120000",
    percentage: "80",
    text: "Earned",
    color: "#6748E3",
    bgColor: "#E1DAF9",
  },
  {
    heading: "Target Commission",
    value: "150000",
    percentage: "100",
    text: "Target",
    color: "#46A1FF",
    bgColor: "#E0EFFF",
  },
  {
    heading: "Required Commission",
    value: "30000",
    percentage: "20",
    text: "Remaining",
    color: "#FFD501",
    bgColor: "#FFF7D0",
  },
];
